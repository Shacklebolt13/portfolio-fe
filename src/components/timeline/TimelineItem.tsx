// filepath: d:\personal\portfolio-fe\src\components\timeline\TimelineItem.tsx
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
    index?: number; // Index for staggered animations
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    description,
    icon,
    isLast = false,
    position = 'left',
    href,
    index = 0, // Default index if not provided
}) => {
    // On large screens we respect the provided position (alternating left/right)
    // On medium and smaller screens we always show items on the right with CONSISTENT indent
    return (
        <a
            href={href}
            className={`flex items-center relative 
                ${position === 'left'
                    ? 'lg:justify-end justify-start pl-6 sm:pl-8'
                    : 'justify-start pl-6 sm:pl-8'
                } 
                my-8 sm:my-10 md:my-12 w-full
                hover:z-20 focus-within:z-20
                focus:outline-none`}
            style={{
                // Staggered animation delay based on index
                '--animation-delay': `${index * 0.15}s`
            } as React.CSSProperties}
            role="listitem"
            aria-label={`Timeline item: ${title}`}
            tabIndex={0}
        >
            {/* Timeline content - conditionally positioned based on screen size */}
            <motion.div
                className={`
                    ${position === 'left'
                        ? 'lg:pr-12 lg:text-right'
                        : 'lg:pl-12'
                    } 
                    pl-12 md:pl-16 lg:pl-0
                    relative z-10 w-full lg:w-1/2
                    group`}
                initial={{ opacity: 0, x: position === 'left' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                {/* Special angle decoration for large screens only */}
                <div className={`hidden lg:block absolute top-4 h-[2px] w-8 bg-gradient-to-r from-transparent to-primary/60 
                    ${position === 'left' ? 'right-4' : 'left-4 rotate-180'}`}>
                </div>

                {/* Content card with glass effect */}
                <div className="backdrop-blur-md bg-content1/25 p-4 sm:p-5 md:p-6 rounded-lg 
                    border border-primary/20 shadow-lg relative overflow-hidden 
                    hover:shadow-primary/20 hover:border-primary/40 
                    group-focus:shadow-primary/30 group-focus:border-primary/50 
                    transition-all duration-300 
                    group-hover:translate-y-[-2px] group-focus:translate-y-[-2px]">

                    {/* Enhanced glass effect overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-content1/10 to-transparent pointer-events-none"></div>

                    {/* Subtle light reflection */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl transform rotate-12 opacity-50"></div>

                    {/* Mobile indicator that shows which side this would be on desktop */}
                    <div className={`lg:hidden absolute -top-1 -right-1 h-2 w-2 rounded-full 
                        ${position === 'left' ? 'bg-blue-400/70' : 'bg-purple-400/70'}`}>
                    </div>

                    {/* Content with proper spacing */}
                    <div className="relative z-10">
                        <h3 className="font-bold text-content2 text-lg sm:text-xl">{title}</h3>
                        <p className="text-foreground text-sm sm:text-base mt-2">{description}</p>
                    </div>
                </div>
            </motion.div>

            {/* Timeline element - center on large screens, left-aligned on smaller screens */}
            <div className="absolute inset-0 flex lg:justify-center justify-start pl-3 sm:pl-4 items-start h-full">
                <div className="flex flex-col items-center">
                    {/* Timeline dot/icon with animations */}
                    <motion.div
                        className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 border-primary/80 bg-background/40 backdrop-blur-md flex items-center justify-center overflow-hidden z-20 shadow-md shadow-primary/20"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {/* Inner glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full"></div>

                        {/* Pulsing ring animation */}
                        <motion.div
                            className="absolute inset-0 border-2 border-primary/40 rounded-full"
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.7, 0, 0.7]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                delay: index * 0.2
                            }}
                        />

                        {/* Icons with different sizes for different screens */}
                        <Image src={icon} alt={title} width={24} height={24} className="object-contain sm:hidden relative z-10" />
                        <Image src={icon} alt={title} width={30} height={30} className="hidden sm:block object-contain relative z-10" />
                    </motion.div>

                    {/* Timeline connector line - not shown for the last item */}
                    {!isLast && (
                        <div className="h-full w-0.5 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/30 mt-2 relative">
                            {/* Show different styles for desktop vs mobile */}
                            <div className="lg:hidden absolute -left-1.5 top-4 h-2 w-2 bg-primary/40 rounded-full"></div>

                            {/* Animated glow effect traveling down the timeline */}
                            <motion.div
                                className="absolute w-1 h-12 bg-primary/40 blur-sm"
                                animate={{ y: [0, 100] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 3,
                                    ease: "linear",
                                    delay: index * 0.5
                                }}
                            />
                        </div>
                    )}

                    {/* Mobile-specific dot indicator below timeline icon */}
                    {!isLast && (
                        <div className="lg:hidden absolute left-3 sm:left-4 top-[3.5rem] sm:top-16 md:top-20 h-1.5 w-1.5 rounded-full bg-primary/70"></div>
                    )}
                </div>
            </div>
        </a>
    );
};

export default TimelineItem;
