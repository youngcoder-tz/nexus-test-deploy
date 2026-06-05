"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Flame, ShieldAlert, Zap, ArrowRight } from "lucide-react";

export default function MenuSection({ dishes = [] }: { dishes: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Defensive check: Ensure dishes is an array before processing categories
  const safeDishes = Array.isArray(dishes) ? dishes : [];

  const categories = [
    "All",
    ...new Set(safeDishes.map((d) => d.category).filter(Boolean)),
  ];

  const filteredDishes =
    activeCategory === "All"
      ? safeDishes
      : safeDishes.filter((d) => d.category === activeCategory);

  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-7xl">
        {/* CATEGORY FILTER */}
        <div className="sticky top-24 z-40 mb-20 flex justify-center">
          <div className="no-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/60 p-1.5 backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2 text-[10px] font-black tracking-widest whitespace-nowrap uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-black"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* DISH GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish, i) => (
              <motion.div
                key={dish.id || i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/menu/${dish.id}`} className="group block">
                  <div className="overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/2 transition-all duration-500 hover:border-(--primary)/30">
                    <div className="flex h-full flex-col lg:flex-row">
                      <div className="relative h-64 overflow-hidden lg:h-auto lg:w-2/5">
                        <img
                          src={
                            dish.image ||
                            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                          }
                          className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                          alt={dish.name}
                        />
                      </div>

                      <div className="flex flex-col p-8 lg:w-3/5">
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <span className="mb-1 block text-[9px] font-black tracking-widest text-primary uppercase">
                              {dish.category || "Specialty"}
                            </span>
                            <h4 className="font-secondary text-2xl font-black tracking-tight transition-colors group-hover:text-primary">
                              {dish.name || "Unnamed Dish"}
                            </h4>
                          </div>
                          <span className="font-mono text-xl font-bold tracking-tighter text-accent">
                            ${dish.price || "0"}
                          </span>
                        </div>

                        <p className="mb-6 line-clamp-2 text-sm font-medium text-gray-500">
                          {dish.shortDescription ||
                            "A masterfully engineered Swahili creation."}
                        </p>

                        {/* SAFE MAPPING FOR INGREDIENTS */}
                        <div className="mb-8 flex flex-wrap gap-2">
                          {dish.ingredients
                            ?.slice(0, 3)
                            .map((ing: string, idx: number) => (
                              <span
                                key={idx}
                                className="rounded border border-white/5 bg-white/5 px-2 py-1 text-[8px] font-bold text-gray-600 uppercase"
                              >
                                {ing}
                              </span>
                            )) || (
                            <span className="text-[8px] text-gray-700">
                              Proprietary Ingredients
                            </span>
                          )}
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6 text-gray-800 transition-colors group-hover:text-white">
                          <div className="flex items-center gap-2">
                            <Zap className="h-3.5 w-3.5" />
                            <span className="text-[9px] font-black tracking-widest uppercase">
                              Protocol: GASTRONOMY
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
