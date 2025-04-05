import { LoremIpsum } from "lorem-ipsum";

export default function Blog() {
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
        <div className="flex flex-col flex-grow p-4 overflow-scroll scrollbar-hide max-h-[62vh]">
            {lorem.generateParagraphs(71).split("\n").map((para, index) => (
                <p key={index}>
                    {para}
                </p>
            ))}
        </div>
    )
}