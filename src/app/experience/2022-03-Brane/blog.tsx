"use client";

import BlogHeading from "@/components/blog/BlogHeading";
import BlogText from "@/components/blog/BlogText";
import { Spacer } from "@heroui/react";

export default function Blog() {
    return (
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">
            <BlogHeading text="Summary" />
            <BlogText>
                {"I worked as a freelance backend developer for a company that was building a real-time android app for managing their own proprietary smart home devices. The project was a success and it successfully demonstrated the POC to the higher-ups."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="How I got the gig?" />
            <BlogText>
                {"I had a good friend who had been collaborating with me for a while. He was an Android developer and I was a backend developer. We had been working on a few projects together and he had been telling me about this company he was working for. He told me that they were looking for a backend developer and if I was interested, he could refer me. I was interested and he referred me. I went through the interview process and got the gig."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="My Journey" />
            <BlogText>
                {"Since this was a freelance gig, I was working remotely. I was working on a project that was already in progress. The project was a real-time android app that can be used for managing smart home devices. As far as I was told, the company was doing a POC on proprietary smart home devices and they wanted to build an app that could manage these devices. Read more about the project here."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="What challenges I faced?" />
            <BlogText>
                {"The biggest challenge I faced was collaborating with the Arduino developer. The Arduino developer was working on the firmware and communication protocol for the smart home devices. I had to make sure that the backend was compatible with the firmware and communication protocol. This was a bit challenging because the various constraints of the devices."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="The Outcome" />
            <BlogText>
                {"The project was a success. The app was able to manage the smart home devices and the company was able to demonstrate the POC to the higher-ups. That was the end of my gig. I was paid for my work and I moved on to other projects."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="What I learned" />
            <BlogText>
                {"I learned a lot from this project. I learned how to work with various different clients, communicating with different protocols, and working with different technologies. It was a great learning experience for me, and I enjoyed working on this project. This was my first taste of working on a real-time application, with IOT devices, and I loved it. I am looking forward to working on more projects like this in the future."}
            </BlogText>
        </div >
    )
}