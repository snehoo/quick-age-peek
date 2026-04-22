import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const BLOG_POSTS = [
  { slug: "how-many-heartbeats-in-a-lifetime", title: "How Many Heartbeats in a Lifetime?" },
  { slug: "how-many-full-moons-in-a-lifetime", title: "How Many Full Moons in a Lifetime?" },
  { slug: "what-generation-am-i", title: "What Generation Am I?" },
  { slug: "how-to-calculate-age-in-days", title: "Calculate Your Age in Days" },
  { slug: "what-is-a-life-clock", title: "What Is a Life Clock?" },
];

interface BlogMenuProps {
  className?: string;
  label?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom";
}

const BlogMenu = ({
  className,
  label = "Blog",
  align = "center",
  side = "top",
}: BlogMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={
          className ??
          "hover:text-foreground transition-colors outline-none cursor-pointer"
        }
      >
        {label}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} side={side} className="w-64">
        <DropdownMenuItem asChild>
          <Link to="/blog" className="cursor-pointer font-medium">
            All posts
          </Link>
        </DropdownMenuItem>
        {BLOG_POSTS.map((p) => (
          <DropdownMenuItem key={p.slug} asChild>
            <Link to={`/blog/${p.slug}`} className="cursor-pointer">
              {p.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BlogMenu;
