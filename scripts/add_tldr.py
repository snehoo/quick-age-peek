#!/usr/bin/env python3
"""
Mechanical TL;DR rollout for standalone blog post .tsx files.

Safe by construction: bullets are extracted verbatim from each post's own
<H2> section headings (already-written, human-authored text) — nothing is
invented. Skips files that already have a <TLDR or that use a shared
template (BornInYearArticle / UnitArticleShell), since those need either
per-post or template-level handling instead.

Inserts <TLDR items={[...]} /> immediately after the closing </Lead> tag,
and adds TLDR to the ArticleLayout import if missing.
"""

import re
import sys
from pathlib import Path
from typing import Tuple

BLOG_DIR = Path(__file__).resolve().parent.parent / "src" / "pages" / "blog"

H2_RE = re.compile(r"<H2>(.*?)</H2>", re.DOTALL)
LEAD_CLOSE_RE = re.compile(r"</Lead>")
IMPORT_RE = re.compile(
    r'import\s*\{([^}]*)\}\s*from\s*"(@/components/blog/ArticleLayout|\./ArticleLayout)"'
)


def add_tldr_import(src: str) -> Tuple[str, bool]:
    m = IMPORT_RE.search(src)
    if not m:
        return src, False
    names_blob = m.group(1)
    if re.search(r"\bTLDR\b", names_blob):
        return src, True
    new_names_blob = names_blob.rstrip()
    if not new_names_blob.endswith(","):
        new_names_blob += ","
    new_names_blob += "\n  TLDR,"
    new_src = src[: m.start(1)] + new_names_blob + src[m.end(1) :]
    return new_src, True


def build_tldr_jsx(headings: list) -> str:
    items = ",\n    ".join(f'"{h}"' for h in headings)
    return f"      <TLDR\n        items={{[\n    {items},\n        ]}}\n      />\n"


def process_file(path: Path) -> str:
    src = path.read_text()

    if re.search(r"<TLDR\b", src):
        return "skip (already has TLDR)"
    if "BornInYearArticle" in src or "UnitArticleShell" in src:
        return "skip (uses shared template)"
    if "useArticleMeta" not in src:
        return "skip (no useArticleMeta call)"

    headings = [h.strip() for h in H2_RE.findall(src)]
    # strip any inline JSX/markup inside headings (keep plain text only)
    headings = [re.sub(r"<[^>]+>", "", h).strip() for h in headings]
    headings = [h for h in headings if h]

    if len(headings) < 2:
        return "skip (fewer than 2 H2 headings to summarize)"

    lead_match = LEAD_CLOSE_RE.search(src)
    if not lead_match:
        return "skip (no <Lead> found)"

    new_src, did_import = add_tldr_import(src)
    if not did_import:
        return "FAILED: could not find ArticleLayout import"

    # re-find </Lead> position in the (possibly import-shifted) new_src
    lead_match2 = LEAD_CLOSE_RE.search(new_src)
    insert_at = lead_match2.end()
    tldr_jsx = "\n" + build_tldr_jsx(headings[:6])
    new_src = new_src[:insert_at] + tldr_jsx + new_src[insert_at:]

    path.write_text(new_src)
    return f"updated ({len(headings[:6])} bullets)"


def main():
    target_names = sys.argv[1:]
    files = (
        [BLOG_DIR / name for name in target_names]
        if target_names
        else sorted(BLOG_DIR.glob("*.tsx"))
    )
    for path in files:
        print(f"{path.name}: {process_file(path)}")


if __name__ == "__main__":
    main()
