"use client";
import React from "react";
import Carousel from "../carousel/Carousel";
import { CarouselItemProps } from "../carousel/CarouselItem";
import { getDisplayData } from "@/services/dataService";
import { SKILL_SUBSECTION } from "@/constants/subsections";
import { motion } from "framer-motion";

const SkillsSection: React.FC = () => {
    // Get skills data from the data service
    const displayData = getDisplayData();
    const skills = displayData.get(SKILL_SUBSECTION) || [];

    // Convert skills data to CarouselItemProps format
    const skillItems: CarouselItemProps[] = skills.map(skill => ({
        largeIcon: skill.icon,
        title: skill.title,
        id: skill.id,
        href: `/${SKILL_SUBSECTION}/${skill.id}`,
    })); return (<section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" id="skills">
        {/* Subtle background elements that enhance the glass effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none"></div>
        <div className="absolute inset-0 opacity-5">
            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary/30 blur-3xl top-20 left-1/4"></div>
            <div className="absolute w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-primary/20 blur-3xl bottom-10 right-1/3"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Here are the technologies I work with
                </motion.h2>
                <motion.p
                    className="text-center text-foreground text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    These are the spells I use to conjure up amazing applications. I can work with a variety of technologies, but these are my favorites and the ones I am the best in.
                </motion.p>

                <Carousel items={skillItems} />
            </motion.div>
        </div>
    </section>
    );
};

export default SkillsSection;
