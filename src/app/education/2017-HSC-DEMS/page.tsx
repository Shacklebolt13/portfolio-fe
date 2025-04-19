import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export const metadata = {
    title: "Higher Secondary Education | Deepika English Medium School",
    description: "Higher Secondary Education at Deepika English Medium School",
    openGraph: {
        title: "Higher Secondary Education | Deepika English Medium School",
        description: "Higher Secondary Education at Deepika English Medium School",
        images: [
            {
                url: "/icons/dems.png",
                width: 50,
                height: 55,
                alt: "Deepika English Medium School Logo"
            }
        ],
        locale: "en_US",
        type: "website"
    }
};

export default function Page() {

    return (
        <>
            <main className="flex flex-col flex-grow">
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
            </main>
        </>
    )
}