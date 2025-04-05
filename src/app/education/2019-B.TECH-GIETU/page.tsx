"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import { LoremIpsum } from "lorem-ipsum";
import Blog from "./blog";

export default function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="GIET University"
                started_on={new Date("2019-08-01")}
                logo={{
                    icon: "/icons/giet.png",
                }}
                title="B.TECH CSE"
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}