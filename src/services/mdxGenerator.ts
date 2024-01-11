import { Model } from "@/db/getRepository";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";

export default async function createBlogSection(data: Model) {
  const blog: MDXRemoteSerializeResult[] = [];

  if (!data || !data.blog) {
    return blog;
  }

  for (const chunk of data.blog) {
    const compiledSource = await serialize(chunk.replaceAll("\\n", "\n"));
    blog.push(compiledSource);
  }
  return blog;
}
