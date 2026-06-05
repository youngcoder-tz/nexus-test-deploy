"use client";
import { motion } from "framer-motion";
import { IconRenderer } from "../IconRenderer";

export default function Stats({ data }: any) {
  const stats = data?.items || [];

  return (
    <section className="border-y border-white/5 bg-[#080808] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4">
        {stats.map((stat: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors group-hover:border-[var(--primary)]/50">
                <IconRenderer
                  name={stat.icon}
                  className="h-5 w-5 text-[var(--primary)]"
                />
              </div>
            </div>
            <div className="mb-2 flex items-end justify-center font-mono text-4xl font-black tracking-tighter md:text-5xl">
              {stat.value}
              <span className="ml-1 text-xl text-[var(--primary)]">
                {stat.suffix}
              </span>
            </div>
            <div className="mb-2 text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase">
              {stat.label}
            </div>
            <p className="text-[10px] font-bold text-gray-700 uppercase italic">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
