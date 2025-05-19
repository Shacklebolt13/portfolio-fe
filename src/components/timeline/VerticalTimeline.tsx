import React from "react";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";

interface VerticalTimelineProps {
    items: Omit<TimelineItemProps, "isLast">[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
    return (
        <div className="flex flex-col p-4">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
};

export default VerticalTimeline;
