"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

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