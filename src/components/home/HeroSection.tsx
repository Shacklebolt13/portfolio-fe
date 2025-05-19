"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 z-0">
                <Image src="/gifs/10xdev.gif" alt="background" fill className="opacity-20 object-cover" />
            </div>

            <div className="z-10 text-center px-4 w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl bg-background/20 border border-primary/10 shadow-lg"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                        Hi, I am{" "}
                        <span className="text-primary block sm:inline">Gagandeep Singh Bhambrah</span>
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl">I am a Backend developer</p>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
