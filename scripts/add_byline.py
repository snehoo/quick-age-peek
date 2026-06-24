#!/usr/bin/env python3
"""
Mechanical rollout of <ByLine /> across blog post .tsx files that:
  - call useArticleMeta directly (not via a shared template that already
    renders ByLine, e.g. BornInYearArticle / UnitArticleShell)
  - don't already render <ByLine

For each target file:
  1. Add `ByLine` to the import from "@/components/blog/ArticleLayout" (or "./ArticleLayout").
  2. Insert `<ByLine publishedDate="2026-06-24" />` immediately after the closing </h1> tag.

This only handles the byline. TL;DR boxes, list conversions, heading
rewrites, and external citations are content-level changes that still
need per-post authoring.
"""

import re
import sys
from pathlib import Path
from typing import Tuple

BLOG_DIR = Path(__file__).resolve().parent.parent / "src" / "pages" / "blog"
PUBLISHED_DATE = "2026-06-24"

# Matches either:
#   <h1 ...>...</h1>                       (single line)
#   <h1 ...>\n   ...\n      </h1>           (multi-line)
H1_RE = re.compile(r"(<h1\b[^>]*>.*?</h1>)", re.DOTALL)

IMPORT_RE = re.compile(
    r'import\s*\{([^}]*)\}\s*from\s*"(@/components/blog/ArticleLayout|\./ArticleLayout)"'
)


def add_byline_import(src: str) -> Tuple[str, bool]:
    m = IMPORT_RE.search(src)
    if not m:
        return src, False
    names_blob = m.group(1)
    if re.search(r"\bByLine\b", names_blob):
        return src, True  # already imported
    new_names_blob = names_blob.rstrip()
    if not new_names_blob.endswith(","):
        new_names_blob += ","
    new_names_blob += " ByLine"
    new_import = src[: m.start(1)] + new_names_blob + src[m.end(1) :]
    return new_import, True


def insert_byline_after_h1(src: str) -> Tuple[str, bool]:
    m = H1_RE.search(src)
    if not m:
        return src, False
    h1_block = m.group(1)
    # figure out indentation from the line the <h1 started on
    line_start = src.rfind("\n", 0, m.start(1)) + 1
    indent = src[line_start : m.start(1)]
    insertion = f"\n{indent}<ByLine publishedDate=\"{PUBLISHED_DATE}\" />"
    new_src = src[: m.end(1)] + insertion + src[m.end(1) :]
    return new_src, True


def process_file(path: Path) -> str:
    src = path.read_text()

    if re.search(r"<ByLine\b", src):
        return "skip (already has ByLine)"
    if "BornInYearArticle" in src or "UnitArticleShell" in src:
        return "skip (uses shared template)"
    if "useArticleMeta" not in src:
        return "skip (no useArticleMeta call)"
    if "<h1" not in src:
        return "skip (no h1 found)"

    new_src, did_import = add_byline_import(src)
    if not did_import:
        return "FAILED: could not find ArticleLayout import"

    new_src, did_insert = insert_byline_after_h1(new_src)
    if not did_insert:
        return "FAILED: could not find h1 block"

    path.write_text(new_src)
    return "updated"


def main():
    target_names = sys.argv[1:]
    files = (
        [BLOG_DIR / name for name in target_names]
        if target_names
        else sorted(BLOG_DIR.glob("*.tsx"))
    )

    for path in files:
        result = process_file(path)
        print(f"{path.name}: {result}")


if __name__ == "__main__":
    main()
