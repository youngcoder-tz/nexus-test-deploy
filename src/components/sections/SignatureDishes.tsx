"use client";
import { motion } from "framer-motion";
import { ArrowRight, Utensils } from "lucide-react";
import Link from "next/link";

export default function SignatureDishes({ data }: any) {
  // Defensive check: If there are no items, show a placeholder or return null
  const items = data?.items || [];

  if (items.length === 0) {
    return (
      <div className="m-10 rounded-3xl border-2 border-dashed border-white/5 py-20 text-center">
        <Utensils className="mx-auto mb-4 h-8 w-8 text-gray-700" />
        <p className="font-mono text-xs text-gray-500 uppercase italic">
          No Signature Dishes Configured
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#050505] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 font-mono text-xs tracking-[0.3em] text-primary uppercase">
              The Experience
            </h2>
            <h3 className="font-secondary text-5xl font-black tracking-tighter">
              Signature Engineering
            </h3>
          </div>
          <Link
            href="/menu"
            className="group flex items-center gap-2 text-sm font-bold text-gray-400 transition-colors hover:text-white"
          >
            View Full Menu{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {items.map((dish: any, i: number) => (
            <motion.div
              key={dish.id || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-(--radius-xl) border border-white/5 bg-[#0A0A0A]"
            >
              <Link href={`/menu/${dish.id}`}>
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={
                      dish.image ||
                      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                    }
                    alt={dish.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-10">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <span className="mb-2 block text-[10px] font-black tracking-widest text-primary uppercase">
                        {dish.category || "Specialty"}
                      </span>
                      <h4 className="text-3xl font-black tracking-tight">
                        {dish.name || "Unnamed Dish"}
                      </h4>
                    </div>
                    <span className="font-mono text-2xl font-bold text-accent">
                      ${dish.price || "0.00"}
                    </span>
                  </div>
                  <p className="mb-8 line-clamp-2 text-gray-500">
                    {dish.shortDescription}
                  </p>

                  {/* Defensive Tag Mapping */}
                  <div className="flex flex-wrap gap-2">
                    {dish.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold text-gray-400 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
