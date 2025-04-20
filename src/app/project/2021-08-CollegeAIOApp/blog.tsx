
import BlogHeading from "@/components/blog/BlogHeading";
import BlogText from "@/components/blog/BlogText";
import { Spacer } from "@heroui/react";

export default function Blog() {
    return (
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">

            <BlogHeading text="Summary" />
            <BlogText>
                {"This project was a collaboration with my classmates to create an all in one application for the college, where students could check their attendance, marks, timetable, etc., along with do daily quizzes and MCQ exams. I created the backend for the app using Django Rest Framework, and used the scraper I had created to get the data from the college website. The app was a huge success and was used by thousands of students. We were facilitated by our HOD for creating such a useful app. The app was passed down to our juniors after we graduated, and they continued to maintain and improve it."}
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Scenaio" />
            <BlogText>
                <p className="my-2">{"It had been months since I had created the scraper for my college website. It was functional but I did not have any use for it."}</p>
                <p className="my-2">{"It was my second year of college, and college had just opened after the corona virus lockdown. I heard news that some of my classmates were planning on creating an app for the college. I envied the hell out of them. I wanted to create something too, but I did not have any ideas."}</p>
                <p className="my-2">{"They wanted to create an all in one application for the college, where students could check their attendance, marks, timetable, etc. and had other features as well. However, they were not able to get the apis for the college website, since it was provided by a third party."}</p>
                <p className="my-2">{"I saw the opportunity and decided to collaborate with them, and use the scraper I had created to get the data from the college website."}</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Creating the Backend" />
            <BlogText>
                <p className="my-2">{"I had to come up with an idea to provide the data to the app, so I decided to serve the same using a REST API, which would be consumed by the app. And as the data had to be latest, It would better to scrape the data on the fly, rather than storing it in a database."}</p>
                <p className="my-2">{"Since I had already created the scraper using scrapy, and I had learnt Django in the Era training, I decided to use Django Rest Framework to create the API. I served the app on an aws ec2 instance under the free tier, and used nginx as a reverse proxy."}</p>
                <p className="my-2">{"Since the scraper was only a POC, and did not scrape in any specific format, I had to rewrite the scraper to scrape and return data in proper format. I used Pandas, which I learned in an nptel course to directly parse the html table for attendance and marks into proper json format and returned it to the app."}</p>
                <p className="my-2">{"It took us about a week to complete the backend and the app was able to consume the data from the API. The app was then launched on the play store and was a hit among the students. Thousands of students downloaded the app and used it to check their attendance, marks, timetable, etc."}</p>
                <p className="my-2">{"It was promoted by the college and was a huge success and I was really proud of what we had created."}</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Improving the App" />
            <BlogText>
                <p className="my-2">{"The app was a success, and we decided to improve it further. There was a rising complaint about the app being slow, so I decided to check the backend. I found that the scraper was taking a lot of time to start and scrape the data, and the app was waiting for the data to be returned."}</p>
                <p className="my-2">{"I re-wrote the scraper without using scrapy, but simply with requests and beautifulsoup, and it was much faster. I also added a caching mechanism to cache the data for a few hours, so that the app would not have to wait for the data to be scraped every time. This improved the app's performance and the app was much faster now."}</p>
                <p className="my-2">{"We added a small MCQ Exam feature to the app as well, where the teachers could upload MCQ questions and the students could take the exam. It even had security features to prevent cheating, like not allowing the student to switch apps, only allowing 3 disconnects, specified time limit, server based question validation, etc."}</p>
                <p className="my-2">{"We also added a small quiz feature, where the students could take quizzes with randomized questions daily and earn points. The students with the highest points would be displayed on the leaderboard. The leaderboard would reset every day using a cron job, and the students would compete to be on the top."}</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Future Plans" />
            <BlogText>
                <p className="my-2">{"We had plans to add a bus tracking feature to the app, where the students could track the college bus in real time. We also had plans to add a chat feature to the app, where the students could chat with each other, and with the teachers, etc. However, we were not able to implement these features due to time constraints."}</p>
                <p className="my-2">{"The app was passed down to our juniors after we graduated, and they continued to maintain and improve it. It was a great feeling to see something you created being used by thousands of people, and I was really proud of what we had created."}</p>
            </BlogText>
            <Spacer y={5} />

            <BlogHeading text="Conclusion" />
            <BlogText>
                <p className="my-2">{"This project was a huge success and we were facilitated by our HOD for creating such a useful app. It was a great learning experience for me, and I learnt a lot of new things while creating this app. I was really proud of what we had created, and it was a great feeling to see something you created being used by thousands of people. I was really happy with what we had created, and it was a great experience for me."}</p>
            </BlogText>
            <Spacer y={5} />

        </div >
    )
}