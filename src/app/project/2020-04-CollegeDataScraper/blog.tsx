"use client";

import BlogHeading from "@/components/blog/BlogHeading";
import BlogText from "@/components/blog/BlogText";
import { Spacer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    return (
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">

            <BlogHeading text="Summary" />
            <BlogText>
                {"My college had a website where all the data of the students were stored. The website was horrible. It was slow, it was not user-friendly, it was not mobile-friendly as well. However, the college had no other option but to use the website, forcing the students as well as the teachers to use the website. One day, I wanted to learn something new, and decided to create a scraper for our college website. I learned a lot of new things, but the website was not easy to scrape. I had to spend a lot of time to scrape the website. I was finally able to scrape the website, and get the data of all the logged in students. It was a fun project, and stayed that way for a long time, until I found a use for it."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Scenario" />
            <BlogText>
                <p className="my-2">{"My college had a website where all the data of the students were stored. The data included the student's name, roll number, email, phone number, etc., along with student's marks and attendance in each subject."}</p>
                <p className="my-2">{"The website was a 3rd party website, they had leased the website to the college. The college had no control over the website. Any changes to the website had to be requested to the 3rd party company."}</p>
                <p className="my-2">{"The website was horrible. It was slow, it was not user-friendly, it was not mobile-friendly as well. However, the college had no other option but to use the website, forcing the students as well as the teachers to use the website."}</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="My motivation behind the scraper" />
            <BlogText>
                <p className="my-2">{"This was the start of my second year in college. New students were being inducted into the college. There was a ceremony for the new students. The ceremony was held in the college auditorium."}</p>
                <p className="my-2">{"To motivate the new students, the college dean presented a lot of prizes to the students who had performed well in the previous year. Many of them had scored above 90% in their exams, many of them had won medals in sports, many of them had won prizes in cultural events, etc."}</p>
                <p className="my-2">{"There were a few students, who had created amazing projects. They had created websites, mobile apps, etc. They had also won prizes for their projects. I was sad that I was not one of them. I had not created any project. I had not won any prize. I had not scored above 90% in any of my exams. I was just an average student."}</p>
                <p className="my-2">{"Instead of feeling sad, I decided to do something about it. I decided to learn something new."}</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Creating a scraper" />
            <BlogText>
                <p className="my-2">{"I found a new framework called Scrapy, and wanted to learn it. I scraped a few test websites, so that I could learn Scrapy quickly. It was fun. This was the first time I got to know there's something called generators in Python. I had never used them before."}</p>
                <p className="my-2">{"After a few days, I tried scraping my college website. It was an aspx website, created using ASP.NET. And it was horrible. Everytime I tried to log in, the website would not let me. Each request would eventually redirect me to the login page. I could not understand why. I tried to log in using the browser, and then the browser would let me log in. But the scraper would not."}</p>
                <p className="my-2">{"I decided to compare the requests. I found what was wrong. The website was setting a cookie, and the scraper was not sending the cookie back to the server. I fixed the issue, but did the login work? No. The website would still redirect me to the login page."}</p>
                <p className="my-2 flex justify-center">
                    <Image
                        src={"/memes/whyy.jpg"}
                        alt="Why"
                        width={300}
                        height={300}
                    />
                </p>
                <p className="my-2">{"I was frustrated. I had spent a lot of time on this. I had learned a lot of new things, but I could not scrape the website. I decided to send every single header that the browser was sending. I copied all the headers from the browser, and sent them in the request headers of the scraper. it worked.. I was able to log in. Huh? what was wrong before? I analyzed the request, experimented removing each header one by one and found the issue."}</p>
                <p className="my-2">{"The website had a referer policy. The website would check the referer header of the request. If the referer header was not set, the website would redirect the user to the login page."}</p>
                <p className="my-2 flex justify-center">
                    <Image
                        src={"/memes/facepalm.jpg"}
                        alt="Why"
                        width={300}
                        height={300}
                    />
                </p>
                <p className="my-2">{"Hours of frustration, and the issue was so simple. I had learned a lot of new things, but I had wasted a lot of time as well. It was finally working. I was able to scrape the website. I was able to get the data of all the logged in student."}</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Conclusion" />
            <BlogText>
                <p className="my-2">{"I created the scraper, it was working fine. I was happy, that I had learned something new. My sadness was gone, I found a new level of confidence in me."}</p>
                <p className="my-2">{"However, I could not find any use for the scraper. It was a fun project, but it stayed in my computer for a long time, without any use. Until........ I found a use for it. Read it "}
                    <Link href="/project/2021-08-CollegeAIOApp/" className="text-secondary" >here</Link>
                </p>
            </BlogText>
            <Spacer y={5} />

        </div >
    )
}