"use client";
import React, { useState, useRef, useEffect } from "react";
import CarouselItem, { CarouselItemProps } from "./CarouselItem";
import { motion } from "framer-motion";

interface CarouselProps {
    items: CarouselItemProps[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []); return (
        <div className="relative overflow-hidden px-2 sm:px-4 py-6 sm:py-8 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-lg">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[url('/gifs/bgrain.gif')] opacity-5 mix-blend-overlay pointer-events-none"></div>

            {/* Mobile instructions for swipe/drag */}
            <div className="text-xs text-center text-foreground/50 mb-4 block sm:hidden">
                ← Swipe to explore skills →
            </div>

            <motion.div
                ref={carouselRef}
                className="cursor-grab relative z-10"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-4 sm:gap-6 md:gap-8 justify-start sm:justify-center"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[140px] sm:min-w-[170px] md:min-w-[200px]"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <CarouselItem
                                largeIcon={item.largeIcon}
                                smallIcon={item.smallIcon}
                                title={item.title}
                                href={item.href}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Carousel;
