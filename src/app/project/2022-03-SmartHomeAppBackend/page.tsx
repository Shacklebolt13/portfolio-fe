"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import { LoremIpsum } from "lorem-ipsum";

export default function Page() {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="Personal"
                started_on={new Date("2022-03-14")}
                ended_on={new Date("2022-05-15")}
                logo={{
                    icon: "https://img.freepik.com/premium-vector/smarthome_46706-1195.jpg",
                    height: 50,
                    width: 55
                }}
                title="Smart Home Application Backend"
            />
            <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[65vh]">
                {lorem.generateParagraphs(71).split("\n").map((para, index) => (
                    <p key={index}>
                        {para}
                    </p>
                ))
                }
            </div>
            <RelatedSection />

        </div>
    )
}