import React from "react";
import TimelineItem, { TimelineItemProps } from "./TimelineItem";
import { motion } from "framer-motion";

interface VerticalTimelineProps {
    items: Omit<TimelineItemProps, "isLast" | "position">[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
    // Effect to set CSS variable for JS detection of large screens
    React.useEffect(() => {
        const handleResize = () => {
            document.documentElement.style.setProperty(
                '--lg', 
                window.innerWidth >= 1024 ? '1' : '0'
            );
        };
        
        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className="relative flex flex-col w-full"
             role="list"
             aria-label="Timeline of experiences"
        >{/* Enhanced background effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
                
                {/* Central line glow effect for large screens */}
                <div className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-[1px] bg-primary/30">
                    <div className="absolute inset-0 blur-sm bg-primary/20"></div>
                </div>
                
                {/* Left-aligned line glow for smaller screens */}
                <div className="lg:hidden absolute left-3 sm:left-4 top-20 bottom-20 w-[1px] bg-primary/30">
                    <div className="absolute inset-0 blur-sm bg-primary/20"></div>
                </div>
            </div>{/* Interactive layout indicator that explains the responsive behavior */}
            <div className="flex justify-center mb-6">
                {/* Desktop layout indicator */}
                <div className="hidden lg:flex items-center gap-3 px-5 py-2 rounded-full bg-content1/20 backdrop-blur-md border border-primary/10">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="h-3 w-0.5 bg-primary/60"></span>
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span className="text-xs font-medium text-foreground/80">Centered Timeline</span>
                    <motion.div 
                        className="absolute inset-0 rounded-full border border-primary/30"
                        animate={{ 
                            boxShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 8px rgba(255,255,255,0.3)', '0 0 0px rgba(255,255,255,0)']
                        }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 2
                        }}
                    />
                </div>
                
                {/* Mobile/Tablet layout indicator */}
                <div className="flex lg:hidden items-center gap-2 px-4 py-1.5 rounded-full bg-content1/20 backdrop-blur-md border border-primary/10">
                    <span className="flex flex-col items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                        <span className="h-3 w-0.5 bg-primary/60"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                    </span>
                    <span className="text-xs font-medium text-foreground/80">Side Timeline</span>
                    <motion.span 
                        className="ml-1 opacity-70"
                        animate={{ opacity: [0.4, 0.9, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        ↔
                    </motion.span>
                </div>
            </div>
            
            {/* Helper info text explaining the layout change */}
            <div className="lg:hidden text-xs text-center text-foreground/50 mb-4">
                <span className="hidden md:inline">Layout changes to centered with alternating items on larger screens</span>
                <span className="md:hidden">View on larger screens for alternating layout</span>
            </div>
              {/* Enhanced floating elements with responsive positioning and additional elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Left floating element - different position based on screen size */}
                <motion.div
                    className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-primary/10 blur-3xl"
                    animate={{
                        x: [0, 10, -10, 0],
                        y: [0, -15, 5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut"
                    }}
                    style={{ 
                        top: '20%',
                        // Position adjusts based on screen size
                        left: 'calc(5% + (var(--lg, 0) * 15%))', 
                        opacity: 0.4
                    }}
                />
                
                {/* Right floating element */}
                <motion.div
                    className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full bg-primary/10 blur-3xl"
                    animate={{
                        x: [0, -20, 20, 0],
                        y: [0, 10, -10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "easeInOut"
                    }}
                    style={{ 
                        bottom: '15%', 
                        right: '10%', 
                        opacity: 0.3 
                    }}
                />
                
                {/* Small middle floating element - only visible on larger screens */}
                <motion.div
                    className="hidden lg:block absolute w-16 h-16 rounded-full bg-primary/15 blur-xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut"
                    }}
                    style={{ 
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
                
                {/* Small accent elements for mobile */}
                <motion.div
                    className="lg:hidden absolute w-10 h-10 rounded-full bg-purple-400/10 blur-lg"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                    }}
                    style={{ 
                        top: '30%', 
                        left: '20%', 
                    }}
                />
            </div>            {/* Timeline content with responsive positioning */}
            <div className="relative z-10 pt-4 pb-10">
                {/* Large screen: Center-aligned timeline with alternating left/right items */}
                {/* Small/medium screen: Left-aligned timeline with all items on the right */}
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        href={item.href}
                        isLast={index === items.length - 1}
                        // Large screens (lg+): alternating left/right positions
                        // Medium and smaller screens: all items positioned on the right
                        position={index % 2 === 0 ? 'left' : 'right'}
                        index={index}
                    />
                ))}
                
                {/* Empty state message if no items */}
                {items.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-foreground/60">No timeline items to display</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerticalTimeline;
