import MenuSection from "@/components/sections/MenuSection";
import { getSiteSchema } from "@/lib/getData";

export default async function MenuPage() {
  // 1. Fetch the full schema to get the global dishes list
  const schema = await getSiteSchema();

  // 2. Find the Home Page (where the dishes are stored in your V5.0 JSON)
  const homePage = schema?.pages?.find((p: any) => p.id === "home");

  // 3. Find the Signature Dishes section
  const dishesSection = homePage?.sections?.find(
    (s: any) => s.id === "signature_dishes",
  );

  // 4. Extract items with a hard fallback to an empty array
  const allDishes = dishesSection?.items || [];

  return (
    <div className="min-h-screen bg-[#050505]">
      <section className="bg-linear-to-b from-white/2 to-transparent px-6 pt-40 pb-20 text-center">
        <h1 className="font-secondary mb-6 text-7xl leading-none font-black tracking-tighter uppercase md:text-9xl">
          The Menu<span className="text-primary">.</span>
        </h1>
        <p className="mx-auto max-w-2xl font-mono text-xs tracking-[0.5em] text-gray-500 uppercase">
          A Technical Blueprint of Swahili Gastronomy
        </p>
      </section>

      {/* Pass the dishes safely */}
      <MenuSection dishes={allDishes} />
    </div>
  );
}
