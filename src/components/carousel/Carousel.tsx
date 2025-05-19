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
    }, []);

    return (
        <div className="overflow-hidden px-4 py-6">
            <motion.div
                ref={carouselRef}
                className="cursor-grab"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-6 justify-center"
                >
                    {items.map((item, index) => (
                        <motion.div key={index} className="min-w-[180px]">
                            <CarouselItem
                                largeIcon={item.largeIcon}
                                smallIcon={item.smallIcon}
                                title={item.title}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Carousel;
