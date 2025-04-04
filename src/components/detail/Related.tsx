"use client";
import {
    Accordion,
    AccordionItem,
    Button,
} from "@heroui/react";
import Image from "next/image";
import NextLink from "next/link";

export type RelatedObject = {
    key: string;
    title: string;
    icon: string;
}

export type RelatedSectionProps = {
    related_projects?: RelatedObject[];
    related_skills?: RelatedObject[];
    related_technologies?: RelatedObject[];
    className?: string;
}

export default function RelatedSection({
    related_projects,
    related_skills,
    related_technologies,
    className,
}: RelatedSectionProps) {
    return (
        <div className={`${className ?? ""} block`}>
            <Accordion variant="bordered" selectionBehavior="replace">
                <AccordionItem
                    key="project"
                    title={
                        "Related Projects" +
                        " (" +
                        (related_projects ?? []).length +
                        ")"
                    }
                >
                    <div>
                        {related_projects?.map((project: RelatedObject) => {
                            return (
                                <Button
                                    key={project.key}
                                    variant="bordered"
                                    className="mx-2"
                                    size="md"
                                    as={NextLink}
                                    href={`/project/${project.key}`}
                                    startContent={
                                        <Image src={project.icon} alt="" width={40} height={40} />
                                    }
                                >
                                    <div className="flex-col">
                                        <span>{project.title}</span>
                                        <br />
                                        <small>This is a test</small>
                                    </div>
                                </Button>
                            );
                        }) ?? <>No related projecs</>}
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="technology"
                    title={
                        "Related Technology" +
                        " (" +
                        (related_technologies ?? []).length +
                        ")"
                    }
                >
                    <div>
                        {related_technologies?.map((technology: RelatedObject) => {
                            return (
                                <Button
                                    key={technology.key}
                                    variant="bordered"
                                    size="md"
                                    as={NextLink}
                                    href={`/technology/${technology.key}`}
                                    startContent={
                                        <Image
                                            src={technology.icon}
                                            alt=""
                                            width={40}
                                            height={40}
                                        />
                                    }
                                >
                                    {technology.title}
                                </Button>
                            );
                        }) ?? <>No related technologies</>}
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="skill"
                    title={
                        "Related Skill" + " (" + (related_skills ?? []).length + ")"
                    }
                >
                    <div>
                        {related_skills?.map((skill: RelatedObject) => {
                            return (
                                <Button
                                    key={skill.key}
                                    variant="bordered"
                                    size="md"
                                    as={NextLink}
                                    href={`/skill/${skill.key}`}
                                    startContent={
                                        <Image src={skill.icon} alt="" width={40} height={40} />
                                    }
                                >
                                    {skill.title}
                                </Button>
                            );
                        }) ?? <>No related skills</>}
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
