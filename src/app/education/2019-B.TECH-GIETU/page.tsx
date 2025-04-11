import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";


export const metadata = {
    title: "B.TECH | GIET University",
    description: "B.TECH in Computer Science and Engineering at GIET University",
    openGraph: {
        title: "B.TECH | GIET University",
        description: "B.TECH in Computer Science and Engineering at GIET University",
        images: [
            {
                url: "/icons/giet.png",
                width: 50,
                height: 55,
                alt: "GIET University Logo"
            }
        ],
        locale: "en_US",
        type: "website"
    }
}

export default function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="GIET University"
                started_on={new Date("2019-08-01")}
                logo={{
                    icon: "/icons/giet.png",
                }}
                title="B.TECH CSE"
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}