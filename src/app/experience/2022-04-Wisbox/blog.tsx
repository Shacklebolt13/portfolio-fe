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
                {"I was a co-founder and CTO of an e-commerce startup called Wisbox. I was responsible for the technical direction of the company. I had to build the app from scratch and had to do most of the development work. I had to interview talent, design the backend from scratch. I had to leave the company as I was already working full-time and the workload was too much for me to handle."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="How I got the gig" />
            <BlogText>
                {"My friend and I were contacted one day by a person who was looking for a team to develop a mobile app. We were both studying computer science at the time and we were eager to get some real-world experience. We met with the person over a call and discussed the project in detail. We were excited about the project and decided to take it on. This was an unpaid project and we would be paid in the form of equity in the company."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="My Role In The Company" />
            <BlogText>
                <p className="my-2">{"I joined the company as a co-founder and CTO. I was responsible for the technical direction of the company."}</p>
                <p className="my-2">{"The codebase was basically non-existent when we started. We had to build everything from scratch. I was responsible for the backend development of the app. I had to design the database schema, create the base development environment, and design the architecture of the app."}</p>
                <p className="my-2">{"Since we were a small team without any funding, Developers were hard to come by. I had to do most of the development work myself. I had to learn a lot of new technologies and frameworks on the fly. I had to work long hours and weekends to get the app ready for launch."}</p>
                <p className="my-2">{"Read more about the project "}<Link href="/project/wisbox-ecommerce" className="text-secondary" >here</Link>.</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="The Outcome" />
            <BlogText>
                <p className="my-2">{"As the development of the app progressed, I found it increasingly difficult to manage the workload. Since I was already working full-time, I had to work on the app in the evenings and weekends. This took a toll on my health and I started to feel burnt out. Having no funding and no revenue coming in, we were unable to hire more developers to help with the workload. It also hampered my motivation to work on the app. After a few months of working on the app, I decided to leave the company."}</p>
                <p className="my-2">{"The app can be found on the "}
                    <Link href="https://play.google.com/store/apps/details?id=com.wisbox" className="text-secondary" >Google Play Store</Link>
                    {", and the website can be found "}
                    <Link href="https://wisbox.in/" className="text-secondary">here</Link>.
                </p>
            </BlogText>
        </div >
    )
}