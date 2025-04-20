import { ScrollShadow } from "@heroui/react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";

export default function BlogSection({
  blog,
  className,
}: {
  blog: MDXRemoteSerializeResult[];
  className?: string;
}) {
  var counter = 0;
  return (
    <div className={`${className ?? ""} block`}>
      <ScrollShadow hideScrollBar>
        {blog.map((compiledSource) => (
          <div key={++counter} className="my-4">
            <MDXRemote {...compiledSource} />
          </div>
        ))}
      </ScrollShadow>
    </div>
  );
}
