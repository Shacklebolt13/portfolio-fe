"use client";
import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import { LoremIpsum } from "lorem-ipsum";
import Blog from "./blog";

export default function Page() {

    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="Deepika English Medium School"
                started_on={new Date("2017-08-01")}
                logo={{
                    icon: "/icons/dems.png",
                    height: 50,
                    width: 55
                }}
                title="Higher Secondary Education"
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}