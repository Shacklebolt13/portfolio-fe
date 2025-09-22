import { ACHIEVEMENT_SUBSECTION, BLOG_SUBSECTION, EDUCATION_SUBSECTION, EXPERIENCE_SUBSECTION, PROJECT_SUBSECTION, SKILL_SUBSECTION } from "@/constants/subsections";
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

function getEducation() {
  return [
    {
      icon: "/icons/giet.png",
      title: "B.Tech in CSE",
      id: "2019-B.TECH-GIETU",
      description: "Graduated from GIET University, Gunupur with a CGPA of 8.2",
      url: "#",
    },
    {
      icon: "/icons/dems.png",
      title: "Higher Secondary Education",
      id: "2017-HSC-DEMS",
      description: "Completed my HSC from Deepika English Medium School with a percentage of 75.6%",
      url: "#",
    }
  ]
}

function getExperience() {
  return [
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
      title: "Co-Founder @ Wisbox",
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
  ]
}

function getProjects() {
  return [
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
      "icon": "/icons/smarthome.avif"
    }, {
      "icon": "/icons/ecommerce.svg",
      "description": "Built an E-Commerce Platform for Wisbox",
      "id": "2022-05-ECommercePlatform",
      "title": "E-Commerce Platform"
    }
  ]
}

function getSkills() {
  return [
    {
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
    }
  ]
}

function getBlogs() {
  return []
}

function getAchievements(): any {
  return [
    {
      "icon": "/icons/rising-star.jpg",
      "description": "I received the Rising Star Award at Calsoft's Bi-Annual Awards Ceremony.",
      "id": "2025-09-RisingStar",
      "title": "Rising Star @ Calsoft Inc.",
      "url": "https://lnkd.in/p/dBy7Zr3C"
    },
    {
      "icon": "/icons/star_emp.png",
      "description": "I got coined as a Star Employee at Calsoft Inc.",
      "id": "2024-06-StarEmployee",
      "title": "Star Employee @ Calsoft Inc.",
      "url": "https://www.linkedin.com/posts/gdsbhambrah_calsoft-grateful-star-activity-7207022070872866817-yLoQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6ulqABBkKvDrykF-bwnB1bcqF1_wuhPT4"
    },
    {
      "icon": "/icons/hacktoberfest.jpg",
      "description": "Recieved swag for my contribution to the Hacktoberfest 2022.",
      "id": "2022-10-Hacktoberfest",
      "title": "Swags from Hacktoberfest 2022",
      "url": "https://www.linkedin.com/posts/gdsbhambrah_hacktoberfest-hacktoberfest2022-hacktoberfest-activity-7030962722682941440-N5F9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6ulqABBkKvDrykF-bwnB1bcqF1_wuhPT4"
    },
    {
      "icon": "/icons/giet.png",
      "description": "I was awarded a certificate of appreciation for my contribution to the GIET University's All In One Application.",
      "id": "2020-04-GIETUApp",
      "title": "Certificate of Appreceiation @ GIET University",
      "url": "https://www.linkedin.com/posts/gdsbhambrah_android-hod-orientation-activity-6863457971888881664-ewtD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6ulqABBkKvDrykF-bwnB1bcqF1_wuhPT4"
    },
    {
      "icon": "/icons/gdsc.png",
      "description": "I was awarded a certificate of appreciation for my contribution to the GIET University's All In One Application.",
      "id": "2020-01-GDSC",
      "title": "Cybersecurity Lead @ Google Developer Student Club, GIETU.",
      "url": "https://www.linkedin.com/posts/gdsbhambrah_gdsc-cybersecurity-lead-badge-activity-6838514931294466048-xq17?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6ulqABBkKvDrykF-bwnB1bcqF1_wuhPT4"
    }
  ]
}

export function getDisplayData(): Map<string, TabModel[]> {
  return new Map(Object.entries({
    [EDUCATION_SUBSECTION]: getEducation(),
    [EXPERIENCE_SUBSECTION]: getExperience(),
    [PROJECT_SUBSECTION]: getProjects(),
    [SKILL_SUBSECTION]: getSkills(),
    [BLOG_SUBSECTION]: getBlogs(),
    [ACHIEVEMENT_SUBSECTION]: getAchievements()
  }));
}
