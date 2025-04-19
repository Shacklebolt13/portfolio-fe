"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export default function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="Era Interfaces"
                started_on={new Date("2020-03-31")}
                ended_on={new Date("2017-08-01")}
                logo={{
                    icon: "/icons/famenow.png",
                    height: 50,
                    width: 55
                }}
                title="Fame Now : Social Media"
                classNames={{
                    icon: "bg-gray-900"
                }}
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}