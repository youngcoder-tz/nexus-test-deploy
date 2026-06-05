import {
  Clock,
  Flame,
  ShieldAlert,
  ChevronLeft,
  Share2,
  Heart,
  Zap,
  ThermometerSnowflake,
} from "lucide-react";
import Link from "next/link";
import { getDishData } from "@/lib/getData";

export default async function DishDetail({
  params,
}: {
  params: { id: string };
}) {
  const { dish, config } = await getDishData(params.id);

  if (!dish)
    return (
      <div className="flex h-screen items-center justify-center">
        Dish not found
      </div>
    );

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-(--primary)/30">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={dish.image}
          className="h-full w-full scale-105 object-cover"
          alt={dish.name}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/20 to-transparent" />

        {/* Navigation Overlays */}
        <div className="absolute top-32 right-8 left-8 z-10 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-black/40 p-3 backdrop-blur-xl transition-all hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div className="flex gap-3">
            <button className="rounded-full border border-white/10 bg-black/40 p-3 backdrop-blur-xl transition-all hover:bg-white/10">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="rounded-full border border-white/10 bg-black/40 p-3 text-accent backdrop-blur-xl transition-all hover:bg-white/10">
              <Heart className="h-5 w-5 fill-current" />
            </button>
          </div>
        </div>

        {/* Title Block */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-wrap gap-2">
              {dish.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary px-4 py-1.5 text-[10px] font-black tracking-widest text-black uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-secondary mb-4 text-6xl leading-[0.8] font-black tracking-tighter md:text-9xl">
              {dish.name}
            </h1>
            <p className="max-w-2xl text-2xl font-medium text-gray-400">
              {dish.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL SPECIFICATIONS BAR */}
      <section className="border-y border-white/5 bg-[#080808] py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-8 md:grid-cols-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Clock className="h-5 w-5 text-cyan-500" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                Prep Time
              </p>
              <p className="font-mono text-xl font-bold">{dish.prepTime} Min</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                Heat Level
              </p>
              <p className="font-mono text-xl font-bold">{dish.spiceLevel}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Zap className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                Technique
              </p>
              <p className="font-mono text-xl font-bold">Molecular</p>
            </div>
          </div>
          <div className="flex flex-col justify-center text-right">
            <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
              Investment
            </p>
            <p className="text-4xl font-black text-accent">
              {config.metadata.currencySymbol}
              {dish.price}
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE "DECONSTRUCTION" (Details) */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-8 py-32 lg:grid-cols-12">
        {/* Left Column: Story */}
        <div className="lg:col-span-7">
          <h2 className="mb-10 text-[10px] font-black tracking-[0.4em] text-primary uppercase">
            The Narrative
          </h2>
          <div
            className="prose prose-invert prose-xl prose-p:text-gray-400 prose-p:leading-relaxed prose-headings:font-black prose-headings:tracking-tighter max-w-none"
            dangerouslySetInnerHTML={{ __html: dish.description }}
          />

          {/* Gallery Sub-Grid */}
          {dish.gallery && (
            <div className="mt-20 grid grid-cols-2 gap-4">
              {dish.gallery.map((img: string, i: number) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-4xl border border-white/5"
                >
                  <img
                    src={img}
                    className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                    alt="Detail"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Metadata & Allergens */}
        <div className="space-y-12 lg:col-span-5">
          {/* Ingredients Node */}
          <div className="rounded-[2.5rem] border border-white/5 bg-white/2 p-10">
            <div className="mb-8 flex items-center gap-3">
              <ThermometerSnowflake className="h-5 w-5 text-cyan-400" />
              <h3 className="text-xs font-black tracking-[0.2em] uppercase">
                Molecular Base
              </h3>
            </div>
            <ul className="space-y-4">
              {dish.ingredients.map((ing: string, i: number) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-white/5 pb-4 text-sm last:border-0"
                >
                  <span className="font-medium text-gray-300">{ing}</span>
                  <span className="font-mono text-[10px] text-gray-600 uppercase">
                    Verified
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Allergen Shield */}
          <div className="rounded-[2.5rem] border-2 border-orange-500/20 bg-orange-500/5 p-10">
            <div className="mb-6 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-orange-500" />
              <h3 className="text-xs font-black tracking-[0.2em] text-orange-500 uppercase">
                Allergen Protection
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {dish.allergens.map((all: string) => (
                <span
                  key={all}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-bold text-white uppercase"
                >
                  {all}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[10px] leading-relaxed font-bold text-gray-500 uppercase italic">
              * Prepared in a facility that processes high-fidelity aromatics.
            </p>
          </div>

          {/* Book Button */}
          <button className="w-full rounded-lg bg-white py-6 text-sm font-black tracking-widest text-black uppercase shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02] active:scale-95">
            Experience This Dish
          </button>
        </div>
      </section>
    </div>
  );
}
