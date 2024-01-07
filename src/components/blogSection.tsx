"use client";
import { Card, CardBody } from "@nextui-org/react";
import { Model } from "@/db/getRepository";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";

export default function BlogSection({
  data,
  blog,
}: {
  data: Model;
  blog: MDXRemoteSerializeResult[];
}) {
  var counter = 0;
  return (
    <>
      <Card>
        <CardBody className="flex flex-col justify-evenly content-evenly">
          {blog.map((compiledSource) => (
            <div key={++counter}>
              <MDXRemote {...compiledSource} />
            </div>
          ))}
        </CardBody>
      </Card>
    </>
  );
}
