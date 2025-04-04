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
                organization="Wisbox"
                started_on={new Date("2022-04-17")}
                ended_on={new Date("2022-09-17")}
                logo={{
                    icon: "/icons/wisbox.png",
                    height: 50,
                    width: 55
                }}
                title="Consultant"
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