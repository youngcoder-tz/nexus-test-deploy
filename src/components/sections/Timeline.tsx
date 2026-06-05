"use client";
import { motion } from "framer-motion";

export default function Timeline({ data }: any) {
  const milestones = data?.items || [];

  return (
    <section className="relative overflow-hidden bg-[#080808] py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-32 text-center">
          <h2 className="mb-4 text-[10px] font-black tracking-[0.4em] text-[var(--primary)] uppercase">
            The Evolution
          </h2>
          <h3 className="font-secondary text-5xl font-black tracking-tighter">
            Our Journey
          </h3>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-[19px] w-[1px] bg-linear-to-b from-[var(--primary)] via-white/10 to-transparent md:left-1/2" />

          <div className="space-y-24">
            {milestones.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Dot */}
                <div className="absolute left-0 z-10 flex h-10 w-10 -translate-x-[18px] items-center justify-center rounded-full border-2 border-[var(--primary)] bg-[#050505] shadow-[0_0_20px_rgba(6,182,212,0.3)] md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--primary)]" />
                </div>

                {/* Content Card */}
                <div className="group ml-16 md:ml-0 md:w-1/2">
                  <div
                    className={`rounded-[2.5rem] border border-white/5 bg-white/2 p-10 transition-all hover:border-[var(--primary)]/30 ${i % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}
                  >
                    <span className="mb-4 block text-5xl font-black text-white/5 transition-colors group-hover:text-[var(--primary)]/10">
                      {item.year}
                    </span>
                    <h4 className="mb-4 text-2xl font-black tracking-tight uppercase">
                      {item.title}
                    </h4>
                    <p className="leading-relaxed font-medium text-gray-500">
                      {item.description}
                    </p>

                    {item.image && (
                      <div className="mt-8 overflow-hidden rounded-2xl opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-48 w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
