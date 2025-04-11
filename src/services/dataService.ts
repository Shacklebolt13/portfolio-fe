import { EDUCATION_SUBSECTION, EXPERIENCE_SUBSECTION, PROJECT_SUBSECTION, SKILL_SUBSECTION } from "@/constants/subsections";
import { ContactModel } from "@/schema/ContactModel";
import { TabModel } from "@/schema/TabModel";

export default function getContact() {
  return {
    title: "A little about me",
    related_links: [
      {
        link: "https://github.com/Shacklebolt13/portfolio-fe",
        title: "Source Code Of This Website",
        icon: "/icons/source.svg"
      },
      {
        link: "https://github.com/Shacklebolt13/",
        title: "My Projects",
        icon: "/icons/github.svg"
      },
      {
        title: "My LinkedIn",
        icon: "/icons/linkedin.png",
        link: "https://www.linkedin.com/in/gdsbhambrah"
      },
      {
        link: "mailto:gdsbhambrah@gmail.com",
        title: "Email Me",
        icon: "/icons/email.svg"
      }
    ]
  } as ContactModel;
}

export function getDisplayData(): Map<string, TabModel[]> {
  const data = {
    [EDUCATION_SUBSECTION]: [
      {
        icon: "/icons/giet.png",
        title: "B.Tech in CSE",
        id: "2019-B.TECH-GIETU",
        description: "Graduated from GIET University, Gunupur with a CGPA of 8.2",
      },
      {
        icon: "/icons/dems.png",
        title: "Higher Secondary Education",
        id: "2017-HSC-DEMS",
        description: "Completed my HSC from Deepika English Medium School with a percentage of 75.6%",
      }
    ],
    [EXPERIENCE_SUBSECTION]: [
      {
        id: "2021-08-RethinkUX",
        title: "SDE intern @ Rethink UX",
        icon: "/icons/rethinkux.png",
        description: "Interned as an SDE Intern at Rethink UX"
      },
      {
        description: "Freelanced for a project at Brane Enterprises",
        icon: "/icons/brane.png",
        id: "2022-03-Brane",
        title: "Consultant @ Brane Enterprises"
      },
      {
        title: "Co-Founded @ Wisbox",
        icon: "/icons/wisbox.png",
        id: "2022-04-Wisbox",
        description: "Co-Founded Wisbox and worked as a CTO."
      },
      {
        description: "Interned as an SDE Intern at Calsoft Inc.",
        title: "SDE Intern @ Calsoft Inc.",
        id: "2022-07-Calsoft",
        icon: "/icons/calsoft.png"
      },
      {
        icon: "/icons/jatrajagat.webp",
        description: "Consulted for JatraJagat.",
        title: "Consultant @ JatraJagat",
        id: "2022-10-JatraJagat"
      },
      {
        description: "Contributed as a Development Engineer at Calsoft Inc.",
        id: "2023-07-Calsoft",
        icon: "/icons/calsoft.png",
        title: "Development Engineer @ Calsoft Inc."
      },
      {
        title: "Senior Development Engineer @ Calsoft Inc.",
        id: "2024-08-Calsoft",
        icon: "/icons/calsoft.png",
        description: "Contributed as a Development Engineer at Calsoft Inc."
      }
    ],
    [PROJECT_SUBSECTION]: [
      {
        "icon": "/icons/pentest.png",
        "title": "Captive Portal Pentest",
        "id": "2019-12-CaptivePortalPentest",
        "description": "Brute forced college captive portal using python and android."
      }, {
        "id": "2020-04-CollegeDataScraper",
        "title": "GIETU Attendance Scraper",
        "description": "Created a attendance scraper to fetch attendance, marks, profile etc. from our college website.",
        "icon": "/icons/giet.png"
      }, {
        "title": "Fame Now : Social Media",
        "description": "Created a Social Media platform under training by Era Interfaces",
        "icon": "/icons/famenow.png",
        "id": "2021-04-FameNow"
      }, {
        "title": "GIET All In One Application",
        "description": "Created a backend for our College's All in One Application.",
        "id": "2021-08-CollegeAIOApp",
        "icon": "/icons/giet.png"
      }, {
        "title": "Smart Home Application Backend",
        "description": "Built a real time backend for a smart home application",
        "id": "2022-03-SmartHomeAppBackend",
        "icon": "https://img.freepik.com/premium-vector/smarthome_46706-1195.jpg"
      }, {
        "icon": "/icons/ecommerce.svg",
        "description": "Built an E-Commerce Platform for Wisbox",
        "id": "2022-05-ECommercePlatform",
        "title": "E-Commerce Platform"
      }
    ],
    [SKILL_SUBSECTION]: [
      {
        "icon": "/icons/angular.svg",
        "id": "angular",
        "description": "My Experience with Angular",
        "title": "Angular"
      }, {
        "id": "django",
        "description": "My experience with the Django framework.",
        "title": "Django",
        "icon": "/icons/django.svg"
      }, {
        "description": "My Experience with the Docker Platform",
        "id": "docker",
        "icon": "/icons/docker.svg",
        "title": "Docker"
      }, {
        "icon": "/icons/golang.svg",
        "id": "golang",
        "description": "My Experience with Go Lang",
        "title": "Go-Lang"
      }, {
        "title": "Java",
        "id": "java",
        "description": "My Experience with the Java Language",
        "icon": "/icons/java.svg"
      }, {
        "description": "My Experience with the Python Language",
        "icon": "/icons/python.svg",
        "title": "Python",
        "id": "python"
      }, {
        "icon": "/icons/react.svg",
        "description": "My Experience with the Python Language",
        "title": "React",
        "id": "react"
      }, {
        "icon": "/icons/architecture.svg",
        "id": "software-architecture",
        "title": "Software Architecture",
        "description": "My Experience with the Python Language"
      }
    ],
  };
  return new Map(Object.entries(data));
}
