import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";


export const metadata = {
    title: "Consultant | JatraJagat",
    description: "Consultant at JatraJagat",
    openGraph: {
        title: "Consultant | JatraJagat",
        description: "Consultant at JatraJagat",
        images: [
            {
                url: "/icons/jatrajagat.webp",
                width: 50,
                height: 55,
                alt: "JatraJagat Logo"
            }
        ],
        locale: "en_US",
        type: "website"
    }
}

export default async function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="JatraJagat"
                started_on={new Date("2022-09-30")}
                ended_on={new Date("2023-06-02")}
                logo={{
                    icon: "/icons/jatrajagat.webp",
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