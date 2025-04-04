"use client";

import BlogHeading from "@/components/blog/BlogHeading";
import BlogText from "@/components/blog/BlogText";
import { Spacer } from "@heroui/react";

export default function Blog() {
    return (
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">
            <BlogHeading text="Summary" />
            <BlogText>
                {"I Worked at Rethink UX as A Software Development Intern for 6 Months.I used various Tools and Technologies namely: WordPress, Python, JavaScript, Django, Chalice, AWS and NodeJs.I worked to develop internal tools, various backend and frontend features from scratch, all the way to get them deployed on production.I worked with Payment Integration libraries like Razor-pay and Stripe as well.I discussed and consutlted with the clients about their needs, and how we could better help them.I also worked on scraping data from websites, and cleaning and formatting them for marketing purposes."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="How I got in?" />
            <BlogText>
                {"I was recruited via Internshala.I had to undergo a technical test for this, where I had to create a project as per the requirements stated by the Recruiters.After nailing the test, I was selected for the interview, where I was interviewed with the CEO,had an amazing discussion about the job, and other aspects.After the interview, I was selected for the Internship."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="My Journey and Responsibilities" />
            <BlogText>
                <p className="my-2">{"As I joined the Organization, one of my first responsibilities, was to scrape data from Websites to be used for Marketing purposes. I Scraped, cleaned and formatted neatly, data from more than 20 websites, each being around 2-3 GB in size and taking hours to scrape due to multiple roadblocks such as Captcha verifications, DDOS Protection services, Rate limiting, etc. Read more about this project here."}</p>
                <p className="my-2">{"The Majority of my time at Rethink UX, I worked to Develop new features for a Django Based Project. This was a client facing Project, and I had to regularly align and deliver as per the requirements set by our client. I fixed various bugs on this Project, as well as added several new features. One of my biggest works was to add E-Commerce Features to the Project. Read more about this project here."}</p>
                <p className="my-2">{"One of my responsibilities was to deploy from backup, a WordPress website. The website was an E-Commerce website, for selling products listed by our client. I also made design changes to the website, and integrated payments to the Application via Stripe. Read More about this project here."}</p>
                <p className="my-2">{"I Also worked on internal tools, that would help debug issues on production for the company's own products. One such project was to build a tool, to track failure logs, store, analyze and display them in a dev-friendly manner. They could further be used to identify underlying bugs and enhance the product further. Read more about it here."}</p>
                <p className="my-2">{"I was also responsible to deploy, and fix issues on another Django based project. This Project was an informative, registration and booking website for an upcoming convention at that time. The website had various scenarios that were to be fixed, like payment integration, etc. Read more about this project here."}</p>
                <p className="my-2">{"In the last months of my internship, I worked on developing a feature for Rethink UX's own product, Crove. It was one of the biggest projects I had seen in my career till that point in time. I worked on building an experimental new feature, that would help with import and export of data from docx files. Read more about this project here."}</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="What I learned ?" />
            <BlogText>
                <p className="my-2">{"Being in the 2nd year of my engineering degree, this was my first internship. I was a greenhorn when I joined in, knowing nothing about industry standards, performance, code quality. This internship was my first introduction as to how the tech industry works, and it taught me a lot of what I know today. It introduced me to how we develop and deploy our solutions, how they are made accessible to the end users, how they are maintained, and how they are kept secure."}</p>
                <p className="my-2">{"I learned a lot about the tools and technologies I used, and how they are used in the industry. I learned about the importance of code quality, and how it can affect the performance of the application. I learned about the importance of documentation, and how it can help in debugging issues."}</p>
                <p className="my-2">{"I learned about the importance of communication, and how it can help in understanding the requirements of the client, and how it can help in delivering the product as per the requirements."}</p>
                <p className="my-2">{"The most important thing I learned was to never give up. There were times when I was stuck on a problem for hours and hours, but I never gave up. I kept on trying, and eventually, I was able to solve the problem. This taught me to be patient, and to keep on trying, no matter how hard the problem is."}</p>
                <p className="my-2">{"This internship was a great learning experience for me, and if someone is reading this from Rethink UX, I would like to thank them for giving me this opportunity."}</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Work Culture" />
            <BlogText>
                <p className="my-2">{"The work culture at Rethink UX was amazing. The CEO was very friendly, and he always helped me whenever I was stuck on a problem. The team was very supportive, and they always helped me whenever I needed help."}</p>
                <p className="my-2">{"There was a time when I slackened off, and I was not able to deliver as per the requirements. The CEO treated me very nicely, and he helped me to get back on track. He motivated me, and he helped me to deliver the product as per the requirements."}</p>
            </BlogText>
        </div >
    )
}