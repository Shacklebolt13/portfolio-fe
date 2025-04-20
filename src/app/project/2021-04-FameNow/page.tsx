import RelatedSection from "@/components/detail/Related";
import TitleSection from "@/components/detail/Title";
import Blog from "./blog";

export const metadata = {
    title: "Fame Now : Social Media",
    description: "Created a facebook like social media app using Django",
    openGraph: {
        title: "Fame Now : Social Media",
        description: "Created a facebook like social media app using Django",
        images: [
            {
                url: "/icons/famenow.png",
                width: 50,
                height: 55,
                alt: "Fame Now : Social Media Logo"
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