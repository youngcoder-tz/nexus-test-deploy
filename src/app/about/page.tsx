import { getPageData } from "../../lib/getData";
import TeamGrid from "../../components/sections/TeamGrid";
import Timeline from "../../components/sections/Timeline";
import Hero from "../../components/sections/Abouthero";

export default async function AboutPage() {
  const { page } = await getPageData("about");

  return (
    <div className="flex flex-col">
      {page.sections.map((section: any) => {
        switch (section.id) {
          case "about_hero_v2":
            // Reuse the robust Hero component we built earlier
            return <Hero key={section.id} data={section} />;
          case "team":
            return <TeamGrid key={section.id} data={section} />;
          case "timeline":
            return <Timeline key={section.id} data={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
