import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export const metadata = {
    title: "E-Commerce Platform",
    description: "Created an E-Commerce platform as a startup project.",
    openGraph: {
        title: "E-Commerce Platform",
        description: "Created an E-Commerce platform as a startup project.",
        images: [
            {
                url: "/Icons/ecommerce.svg",
                width: 50,
                height: 55,
                alt: "E-Commerce Platform Logo"
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
                organization="Wisbox Inc."
                started_on={new Date("2022-05-15")}
                ended_on={new Date("2024-12-15")}
                logo={{
                    icon: "/icons/ecommerce.svg",
                    height: 50,
                    width: 55
                }}
                title="E-Commerce Platform"
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}