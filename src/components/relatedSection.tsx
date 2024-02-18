"use client";
import { Model } from "@/db/getRepository";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export default function RelatedSection({
  data,
  className,
}: {
  data: Model;
  className?: string;
}) {
  return (
    <div className={`${className ?? ""} block`}>
      <Accordion variant="bordered" selectionBehavior="replace">
        <AccordionItem
          key="project"
          title={
            "Related Projects" +
            " (" +
            (data.related_projects ?? []).length +
            ")"
          }
        >
          <div>
            {data.related_projects?.map((project) => {
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
            (data.related_technologies ?? []).length +
            ")"
          }
        >
          <div>
            {data.related_technologies?.map((technology) => {
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
            "Related Skill" + " (" + (data.related_skills ?? []).length + ")"
          }
        >
          <div>
            {data.related_skills?.map((skill) => {
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
