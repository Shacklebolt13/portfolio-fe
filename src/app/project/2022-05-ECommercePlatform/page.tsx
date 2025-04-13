"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

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