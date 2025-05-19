import React from "react";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";
import { motion } from "framer-motion";

interface VerticalTimelineProps {
    items: Omit<TimelineItemProps, "isLast" | "position">[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
    return (
        <div className="relative flex flex-col w-full">
            {/* Background subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none"></div>

            {/* Subtle floating elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-40 h-40 rounded-full bg-primary/10 blur-3xl"
                    animate={{
                        x: [0, 10, -10, 0],
                        y: [0, -15, 5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut"
                    }}
                    style={{ top: '20%', left: '10%', opacity: 0.4 }}
                />
                <motion.div
                    className="absolute w-60 h-60 rounded-full bg-primary/10 blur-3xl"
                    animate={{
                        x: [0, -20, 20, 0],
                        y: [0, 10, -10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "easeInOut"
                    }}
                    style={{ bottom: '15%', right: '10%', opacity: 0.3 }}
                />
            </div>

            {/* Timeline content */}
            <div className="relative z-10 pt-4 pb-10">
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        href={item.href}
                        isLast={index === items.length - 1}
                        position={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
        </div>
    );
};

export default VerticalTimeline;
