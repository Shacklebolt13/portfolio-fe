import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";


export const metadata = {
    title: "Co-Founder & CTO | Wisbox",
    description: "Co-Founder & CTO at Wisbox",
    openGraph: {
        title: "Co-Founder & CTO | Wisbox",
        description: "Co-Founder & CTO at Wisbox",
        images: [
            {
                url: "/icons/wisbox.png",
                width: 50,
                height: 55,
                alt: "Wisbox Logo"
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
                organization="Wisbox"
                started_on={new Date("2022-04-17")}
                ended_on={new Date("2022-09-17")}
                logo={{
                    icon: "/icons/wisbox.png",
                    height: 50,
                    width: 55
                }}
                title="Co-Founder & CTO"
            />
            <Blog />
            <RelatedSection />
        </div>
    )
}