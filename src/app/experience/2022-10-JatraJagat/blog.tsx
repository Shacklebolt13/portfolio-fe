"use client";

import BlogHeading from "@/components/blog/BlogHeading";
import BlogText from "@/components/blog/BlogText";
import { Spacer } from "@heroui/react";
import Link from "next/link";

export default function Blog() {
    return (
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">
            <BlogHeading text="Summary" />
            <BlogText>
                {"I was the backend developer for JatraJagat, a ticket booking application for the Odia Play industry. I was responsible for building the backend of the application and making sure that it was scalable and reliable. I also set up the infrastructure for the application and integrated various monitoring tools to keep track of the application's performance. The application was launched successfully but could not gain much traction and we had to shut down the project after a few months."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="How I got the gig" />
            <BlogText>
                {"A friend of mine was working with the founder of JatraJagat and he introduced me to him. The guy had an idea and wanted to find a team that could help him build it. My friend and I were the first two people to join the team. He would develop the application and I would build the backend."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="My Journey" />
            <BlogText>
                <p className="my-2">{"I was the backend developer for the company. I was responsible for building the backend of the application and making sure that it was scalable and reliable."}</p>
                <p className="my-2">{"Since I was working full-time, I had to work on the project in my free time. I would spend my evenings and weekends working on the project. To help with the workload, we hired another developer. We shifted the project to a microservices architecture making it easier to manage and scale."}</p>
                <p className="my-2">{"I was also responsible for setting up the infrastructure for the application. I used AWS to host the application and set up the necessary services to make sure that the application was reliable and scalable. While development, I created various CI/CD pipelines to automate the deployment process. This helped us to deploy new features quickly and efficiently. Also, I integrated various monitoring tools to keep track of the application's performance and to identify any issues that might arise."}</p>
                <p className="my-2">{"Read more about the project "}<Link href="/project/enrivers-jatrajagat" className="text-secondary" >here</Link>.</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="What I learned" />
            <BlogText>
                <p className="my-2">{"It was a great learning experience for me and I got to work on some interesting problems. I also got to learn a lot about building scalable applications and managing infrastructure."}</p>
                <p className="my-2">{"I gained a lot of experience on devops technologies as well, and since we had a very little funding, I learned how to make the most out of the various resources available to us."}</p>
                <p className="my-2">{"Being a microservices architecture, I learned how to manage and scale the services. I also learned how to set up monitoring and alerting systems to keep track of the application's performance."}</p>
            </BlogText>
        </div >
    )
}