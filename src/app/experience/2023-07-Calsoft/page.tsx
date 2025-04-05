"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export default function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="Calsoft Inc."
                started_on={new Date("2023-07-03")}
                ended_on={new Date("2024-09-01")}
                logo={{
                    icon: "/icons/calsoft.png",
                    height: 50,
                    width: 55
                }}
                title="Development Engineer"
            />

            <Blog />
            <RelatedSection />

        </div>
    )
}