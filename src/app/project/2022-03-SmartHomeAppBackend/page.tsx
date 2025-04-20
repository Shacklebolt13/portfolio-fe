import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export const metadata = {
    title: "Smart Home Application Backend",
    description: "Created a backend for a smart home application using Django",
    openGraph: {
        title: "Smart Home Application Backend",
        description: "Created a backend for a smart home application using Django",
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
                organization="Personal"
                started_on={new Date("2022-03-14")}
                ended_on={new Date("2022-05-15")}
                logo={{
                    icon: "/icons/smarthome.avif",
                    height: 50,
                    width: 55
                }}
                title="Smart Home Application Backend"
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}