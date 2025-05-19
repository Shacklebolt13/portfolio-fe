"use client";
import React from "react";
import VerticalTimeline from "../timeline/VerticalTimeline";
import { getDisplayData } from "@/services/dataService";
import { EXPERIENCE_SUBSECTION } from "@/constants/subsections";
import { TimelineItemProps } from "../timeline/TimelineItem";
import { motion } from "framer-motion";

const ExperienceSection: React.FC = () => {
    // Get experience data from the data service
    const displayData = getDisplayData();
    const experiences = displayData.get(EXPERIENCE_SUBSECTION) || [];

    // Convert experience data to TimelineItemProps format
    const experienceItems: Omit<TimelineItemProps, "isLast">[] = experiences.map(exp => ({
        title: exp.title,
        description: exp.description,
        icon: exp.icon,
    }));

    // Sort experiences in reverse chronological order
    const sortedExperienceItems = [...experienceItems].reverse();    return (
        <section className="py-20 relative overflow-hidden" id="experience">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-4xl font-bold text-center mb-8"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Professional Experience
                    </motion.h2>
                    <motion.p 
                        className="text-center text-foreground max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        My professional journey and career milestones
                    </motion.p>

                    <div className="max-w-5xl mx-auto">
                        <VerticalTimeline items={sortedExperienceItems} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
