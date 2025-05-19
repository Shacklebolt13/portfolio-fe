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
    }));

    return (
        <section className="py-16" id="skills">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
                    <p className="text-center text-foreground max-w-2xl mx-auto mb-10">
                        These are the technologies and tools I specialize in. Swipe to explore!
                    </p>

                    <Carousel items={skillItems} />
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
