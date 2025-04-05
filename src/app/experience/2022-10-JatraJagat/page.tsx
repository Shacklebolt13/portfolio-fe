"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import { LoremIpsum } from "lorem-ipsum";
import Blog from "./blog";

export default function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="JatraJagat"
                started_on={new Date("2022-09-30")}
                ended_on={new Date("2023-06-02")}
                logo={{
                    icon: "/icons/jatrajagat.webp",
                    height: 50,
                    width: 55
                }}
                title="Consultant"
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}