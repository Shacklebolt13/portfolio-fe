import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export interface TimelineItemProps {
    title: string;
    description: string;
    icon: string;
    isLast?: boolean;
    position?: 'left' | 'right';
    href: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    description,
    icon,
    isLast = false,
    position = 'left',
    href,
}) => {
    return (
        <a href={href} className={`flex items-center relative ${position === 'left' ? 'justify-end pr-10 md:pr-0' : 'justify-start pl-10 md:pl-0'} my-8 w-full`}>
            {/* Timeline content - conditionally positioned */}
            <motion.div
                className={`${position === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'} relative z-10 w-full md:w-1/2`}
                initial={{ opacity: 0, x: position === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="backdrop-blur-md bg-content1/30 p-6 rounded-lg border border-primary/20 shadow-lg relative overflow-hidden">
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                        <h3 className="font-bold text-content2 text-xl">{title}</h3>
                        <p className="text-foreground mt-2">{description}</p>
                    </div>
                </div>
            </motion.div>

            {/* Central timeline element */}
            <div className="absolute inset-0 flex justify-center items-start h-full">
                <div className="flex flex-col items-center">
                    <motion.div
                        className="relative h-12 w-12 rounded-full border-2 border-primary bg-background/50 backdrop-blur-sm flex items-center justify-center overflow-hidden z-20 shadow-md shadow-primary/20"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Image src={icon} alt={title} width={30} height={30} className="object-contain" />
                    </motion.div>
                    {!isLast && <div className="h-full w-0.5 bg-gradient-to-b from-primary to-primary/30 mt-2"></div>}
                </div>
            </div>
        </a>
    );
};

export default TimelineItem;
