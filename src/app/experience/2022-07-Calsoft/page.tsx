"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export default function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="Calsoft"
                started_on={new Date("2022-07-17")}
                ended_on={new Date("2023-07-17")}
                logo={{
                    icon: "/icons/calsoft.png",
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