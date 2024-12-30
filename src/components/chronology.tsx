"use client";
import dynamic from "next/dynamic";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";

export default function Chronology({ timelineItems }: { timelineItems: TimelineItemModel[] }) {

    const Chrono = dynamic(() => import("react-chrono").then(mod => mod.Chrono), { ssr: false });
    return (
        <>
            <span className="min-w-fill-available block text-center text-4xl font-bold text-primary mb-28">
                How My Career Has Progressed
            </span>
            <Chrono
                items={timelineItems}
                mode="VERTICAL_ALTERNATING"
                hideControls={true}
                disableToolbar={true}
                darkMode={true}
            />
        </>
    );
}