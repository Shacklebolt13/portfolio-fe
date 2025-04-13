"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

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