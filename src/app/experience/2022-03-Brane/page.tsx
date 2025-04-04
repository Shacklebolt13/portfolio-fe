"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import { LoremIpsum } from "lorem-ipsum";
import Blog from "./blog";

export default function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="Brane Enterprises"
                started_on={new Date("2022-02-28")}
                ended_on={new Date("2022-05-17")}
                logo={{
                    icon: "/icons/brane.png",
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