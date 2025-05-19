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
    <main className="flex flex-col overflow-hidden w-full">
      <section className="min-h-screen w-full">
        <HeroSection />
      </section>

      {/* Quick navigation */}
      <nav className="w-full flex justify-center gap-4 py-3 px-2 bg-background/30 backdrop-blur-sm border-y border-primary/10 sticky top-0 z-30">
        <a
          href="#skills"
          className="text-xs sm:text-sm px-2 py-1 bg-primary/10 hover:bg-primary/20 rounded-md transition-all"
        >
          Skills
        </a>
        <a
          href="#experience"
          className="text-xs sm:text-sm px-2 py-1 bg-primary/10 hover:bg-primary/20 rounded-md transition-all"
        >
          Experience
        </a>
      </nav>

      <section className="overflow-hidden">
        <SkillsSection />
        <ExperienceSection />
      </section>
    </main>
  );
}
