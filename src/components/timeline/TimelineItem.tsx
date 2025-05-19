import Image from "next/image";
import React from "react";

export interface TimelineItemProps {
    title: string;
    description: string;
    icon: string;
    isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    description,
    icon,
    isLast = false,
}) => {
    return (
        <div className="flex items-start">
            <div className="flex flex-col items-center">
                <div className="relative h-10 w-10 rounded-full border-2 border-primary bg-background flex items-center justify-center overflow-hidden">
                    <Image src={icon} alt={title} width={30} height={30} className="object-contain" />
                </div>
                {!isLast && <div className="h-full w-0.5 bg-primary mt-2"></div>}
            </div>
            <div className="ml-4 mb-8">
                <div className="bg-content1 p-4 rounded-lg border border-divider shadow-md">
                    <h3 className="font-bold text-content2">{title}</h3>
                    <p className="text-foreground mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;
