import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export const metadata = {
    title: "SDE Intern | Rethink UX",
    description: "Software Development Engineer Intern at Rethink UX",
    openGraph: {
        title: "SDE Intern | Rethink UX",
        description: "Software Development Engineer Intern at Rethink UX",
        images: [
            {
                url: "/icons/rethinkux.png",
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
                organization="Rethink UX"
                started_on={new Date("2021-08-15")}
                ended_on={new Date("2022-02-27")}
                logo={{
                    icon: "/icons/rethinkux.png",
                    height: 50,
                    width: 55
                }}
                title="SDE Intern"
            />
            <Blog />
            <RelatedSection />
        </div>
    )
}