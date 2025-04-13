"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

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