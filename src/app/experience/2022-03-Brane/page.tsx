import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";


export const metadata = {
    title: "Consultant | Brane Enterprises",
    description: "Consultant at Brane Enterprises",
    openGraph: {
        title: "Consultant | Brane Enterprises",
        description: "Consultant at Brane Enterprises",
        images: [
            {
                url: "/icons/brane.png",
                width: 50,
                height: 55,
                alt: "Brane Enterprises Logo"
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
                organization="Brane Enterprises"
                started_on={new Date("2022-02-28")}
                ended_on={new Date("2022-05-17")}
                logo={{
                    icon: "/icons/brane.png",
                    height: 50,
                    width: 55
                }}
                title="Consultant"
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}