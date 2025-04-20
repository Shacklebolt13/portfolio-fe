import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export default function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="Personal"
                started_on={new Date("2019-10-30")}
                ended_on={new Date("2020-02-25")}
                logo={{
                    icon: "/icons/java.svg",
                    height: 50,
                    width: 55
                }}
                title="Java"
            />
            <Blog />
            <RelatedSection />

        </div>
    )
}