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

            <div className="z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                        Hi, I am{" "}
                        <span className="text-primary">Gagandeep Singh Bhambrah</span>
                    </h1>
                    <p className="text-2xl md:text-3xl">I am a Backend developer</p>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
