import Hero from "../components/sections/Hero";
import Philosophy from "../components/sections/Philosophy";
import SignatureDishes from "../components/sections/SignatureDishes";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import { getPageData } from "../lib/getData";

export default async function HomePage() {
  const { page } = await getPageData("home");

  return (
    <div className="flex flex-col">
      {page.sections.map((section: any) => {
        switch (section.id) {
          case "hero_v2":
            return <Hero key={section.id} data={section} />;
          case "brand_stats":
            return <Stats key={section.id} data={section} />;
          case "signature_dishes":
            return <SignatureDishes key={section.id} data={section} />;
          case "featured_testimonials":
            return <Testimonials key={section.id} data={section} />;
          case "philosophy":
            return <Philosophy key={section.id} data={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
