import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export const metadata = {
    title: "GIETU All In One App",
    description: "Created the backend for the GIETU All In One App using Django",
    openGraph: {
        title: "GIETU All In One App",

        description: "Created the backend for the GIETU All In One App using Django",
        images: [
            {
                url: "/icons/giet.png",
                width: 50,
                height: 55,
                alt: "Rethink UX Logo"
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
                started_on={new Date("2021-07-01")}
                ended_on={new Date("2023-07-16")}
                logo={{
                    icon: "/icons/giet.png",
                    height: 50,
                    width: 55
                }}
                title="GIETU All In One App"
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}