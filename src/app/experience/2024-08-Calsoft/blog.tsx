import BlogHeading from "@/components/blog/BlogHeading";
import BlogText from "@/components/blog/BlogText";
import { Spacer } from "@heroui/react";

export default function Blog() {
    return (
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">
            <BlogHeading text="On Time Deliveries" />
            <BlogText>
                <p className="my-2">{"As a senior, I was tasked with delivery of multiple features requested by our Client."}</p>
                <p className="my-2">{"I guided a team of ~3 developers and interns to develop over 5 features with 0% bugs, clean code and 100% on time."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Export Rework" />
            <BlogText>
                <p className="my-2">{"There was a requirement for allowing users to export their data. The older code implementation used dynamically generated S3 Pre-Signed urls, which had some issues for scalability."}</p>
                <p className="my-2">{"I designed a reworked export mechanism using CloudFront for better scalability. The new implementation allowed faster download speeds, prevented exposure of the s3 bucket name to public, and fixed other security issues as well."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="CORS Rework" />
            <BlogText>
                <p className="my-2">{"We faced an issue where any unhandled exceptions on lambdas would render as a 502 Gateway Exception, covering up the underlying exception."}</p>
                <p className="my-2">{"As a solution, I designed a complete overhaul of the way we wrote our lambda handlers. I created a custom framework, that would allow default exception handling along with dynamic overrides as required by each handler."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="AWS SDK V2" />
            <BlogText>
                <p className="my-2">{"As we were using AWS SDK V1, we were locked out of using default native compilation features offered by quarkus. As a result, we had to fall back to use graalvm, which had a lot of caveats."}</p>
                <p className="my-2">{"Finally, we upgraded to AWS SDK V2, re-writing almost half of our codebase. Taking advantage of this rework, I worked on creating generic solutions that would allow us to re-use most of our code, reducing complexity and allowing better developer experience."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Snap-Start Auto-Increment" />
            <BlogText>
                <p className="my-2">{"We were using AWS SAM templates for writing our Infrastructure, including lambdas, db, tables, and even our snap start versions. This caused our template to grow huge in size, and we had to split it up into multiple files."}</p>
                <p className="my-2">{"Since we were writing our versions ourselves, each time there was a code update, we had to manually update the snap start version in the template, which caused sync issues a lot of times."}</p>
                <p className="my-2">{"Tired of all these issues, I finally decided to research a better solution, which allowed us to auto update the versions, reducing issues significantly."}</p>
            </BlogText>
            <Spacer y={5} />
            <BlogHeading text="Mentoring" />
            <BlogText>
                <p className="my-2">{"As a senior, I was requested by the Head of our Learning and Development Team, to take a few sessions, provide training materials etc."}</p>
                <p className="my-2">{"I took an introductory session of ~3 hrs for our 30+ interns on my competency, Data protection, alongside 2 senior architects."}</p>
                <p className="my-2">{"I also Provided guidance and training to our interns and other colleagues for Golang and Backend Development."}</p>
            </BlogText>
            <Spacer y={5} />
        </div>
    )
}