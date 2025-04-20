
import BlogHeading from "@/components/blog/BlogHeading";
import BlogText from "@/components/blog/BlogText";
import { Spacer } from "@heroui/react";

export default function Blog() {
    return (
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">

            <BlogHeading text="Summary" />
            <BlogText>
                {"Test"}
            </BlogText>
            <Spacer y={5} />
        </div >
    )
}