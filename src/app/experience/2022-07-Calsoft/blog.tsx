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
                {"I Interned at Calsoft Inc for 1 year. I was trained under the Virtualization competency. I had to make POC Projects during the period of my training, which were evaluated on the basis of the work, code quality and standards maintained. After the training, I was assigned 2 Projects of python and java respectively. The first Project was for VMWare (Python), and the second one for Asigra (Java). I completed my internship while I continued on my second Project and was converted into a Full time Employee."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Trainings" />
            <BlogText>
                {"I was provided with trainings on soft skills and behavioral skills by learned HR folks of the organization."}
                {"I was provided with technical talks in detail of the various IT competencies, like virtualization, networking etc."}
                {"I was provided with hands on technical Training for Virtualization and DevOps."}
                {"I was provided with hands on trainings on vRO and vROPS."}
                {"I was provided with hands on trainings on vRO and vROPS."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Projects and Responsibilities" />
            <BlogText>
                {"When training for Spring and Angular, I prepared a small project comprising of a todo list. It was a very simple project with Spring as the backend and Angular as the frontend. I built and deployed it using docker."}
                {"While training for vRO, I was assigned to create a vRO plugin. The plugin was a simple POC, to test skills in Java, networking, virtualization and to verify the learnings of the trainings."}
                {"While training for vROPS, I was assigned to create a vROPS plugin. The plugin was a POC, to test skills in Java, and to verify the learnings of the trainings."}
                {"I was assigned to work on VMWare's NSX-V to NSX-T migration tool. It was a python based project, and the first live project I was assigned to, while at Calsoft."}
                {"After the end of the project, I was assigned to work on Saas Assure for Asigra. It was the biggest project I had ever worked upon, collaborating with more than 50 personnel. I was converted to a full-time employee while working on the project."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="What I learned ?" />
            <BlogText>
                {"As training was a part of this internship, I learned a lot during the internship. I was trained on both soft skills as well as the technical skills required for a corporate career. The soft skill trainings ranged from behavioral, to procedural, provided by many learned colleagues and Alumni. It gave me a chance to take a look at the internal workings of a corporate body, communicating with management at various levels. I was also provided technical trainings, ranging from proprietary software and frameworks, like VMWare's vRealize Solution, to Open-Source software and frameworks, like Sprint Boot, Angular."}
                {"Apart from trainings, I learned a lot by working on the client projects. I learned a lot about the different services provided by AWS, and how to use them for architecting an application. I learned how to efficiently collaborate with larger teams, and on projects of larger scale following Agile. How to uphold coding quality and standards, along with how to make the code efficient and easy to debug."}
            </BlogText>
        </div >
    )
}