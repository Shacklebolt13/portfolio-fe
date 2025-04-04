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
                organization="Deepika English Medium School"
                started_on={new Date("2021-08-15")}
                ended_on={new Date("2022-02-27")}
                logo={{
                    icon: "/icons/rethinkux.png",
                    height: 50,
                    width: 55
                }}
                title="Sde Intern"
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