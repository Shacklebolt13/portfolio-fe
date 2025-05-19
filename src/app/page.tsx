import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ExperienceSection from "@/components/home/ExperienceSection";

export const metadata = {
  title: "Gagandeep Singh Bhambrah | Portfolio",
  description: "Hi, I am Gagandeep Singh Bhambrah, a Backend developer. Check out my portfolio to know more about me.",
  openGraph: {
    title: "Gagandeep Singh Bhambrah | Portfolio",
    description: "Hi, I am Gagandeep Singh Bhambrah, a Backend developer. Check out my portfolio to know more about me.",
    images: [
      {
        url: "/dp.jpg",
        width: 800,
        height: 600,
      },
    ],
  }
};

export default function Home() {
  return (
    <main className="flex flex-col overflow-auto w-full">
      <section className="min-h-screen w-full">
        <HeroSection />
      </section>
      <section>
        <SkillsSection />
        <ExperienceSection />
      </section>
    </main>
  );
}
