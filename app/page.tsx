import { HeroSection } from "@/components/sections/hero-section";
import { ResearchSection } from "@/components/sections/research-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ArchiveSection } from "@/components/sections/archive-section";
import { Footer } from "@/components/sections/footer";
import { zh } from "@/lib/content/zh";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection profile={zh} />
      <ResearchSection profile={zh} />
      <PublicationsSection profile={zh} />
      <ProjectsSection profile={zh} />
      <SkillsSection profile={zh} />
      <ArchiveSection profile={zh} />
      <Footer profile={zh} />
    </main>
  );
}
