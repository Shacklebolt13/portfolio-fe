import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export const metadata = {
    title: "College Data Scraper",
    description: "Created a scraper to scrape student data from my college's website.",
    openGraph: {
        title: "College Data Scraper",
        description: "Created a scraper to scrape student data from my college's website.",
        images: [
            {
                url: "/icons/giet.png",
                width: 50,
                height: 55,
                alt: "College Data Scraper Logo"
            }
        ],
        locale: "en_US",
        type: "website"
    }
}

export default function Page() {
    return (
        <div className="flex flex-col flex-grow">
            <TitleSection
                organization="Personal"
                started_on={new Date("2020-02-31")}
                ended_on={new Date("2020-07-15")}
                logo={{
                    icon: "/icons/giet.png",
                    height: 50,
                    width: 55
                }}
                title="College Data Scraper"
            />
            <Blog />
            <RelatedSection />
        </div>
    )
}