"use client";
import { ChronologyItemContainer } from "@/dtos/raw-data";
import dynamic from "next/dynamic";
import Image from "next/image";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";

export default function Chronology({ itemContainers: timelineItems }: { itemContainers: ChronologyItemContainer[] }) {

    const Chrono = dynamic(() => import("react-chrono").then(mod => mod.Chrono), { ssr: false });
    const primary = "#2dd4bf";
    return (
        <>
            <span className="min-w-fill-available block text-center text-4xl font-bold text-primary mb-28">
                How My Career Has Progressed
            </span>
            <Chrono
                items={timelineItems.map((itemContainer) => itemContainer.item)}
                mode="VERTICAL_ALTERNATING"
                hideControls={true}
                disableToolbar={true}
                darkMode={true}
                theme={{
                    primary: primary,
                    secondary: "black",
                    titleColor: primary,
                    titleColorActive: primary,
                    cardTitleColor: primary,
                }}
            >
                <div className="chrono-icons">
                    {timelineItems.map((itemContainer) => {
                        return <Image key={itemContainer.item.id} src={itemContainer.icon} alt={""} width={200} height={200} className="min-h-16 min-w-16" />
                    })}
                </div>
            </Chrono>
        </>
    );
}