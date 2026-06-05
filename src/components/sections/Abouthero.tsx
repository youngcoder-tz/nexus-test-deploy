"use client";
import { motion } from "framer-motion";
import { Play, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero({ data }: any) {
  // 1. Extract all fields into a flat object for easy access
  const f = data.fields.reduce(
    (acc: any, curr: any) => ({ ...acc, [curr.id]: curr.defaultValue }),
    {},
  );

  // 2. UNIVERSAL MAPPING LOGIC
  // This ensures the component works regardless of the JSON key names (headline vs title, etc.)
  const content = {
    title: f.headline || f.title || "Kipazi Fusion",
    subtitle: f.subtext || f.subtitle || "",
    primaryBtn: f.primary_cta || f.cta_primary || null,
    primaryLink: f.cta_primary_link || "#",
    secondaryBtn: f.secondary_cta || null,
    video: f.bg_video || null,
    image: f.hero_image || null,
    overlay: f.overlay_color || "rgba(0,0,0,0.4)", // Default fallback
  };

  return (
    <section className="relative flex h-screen min-h-[800px] items-center justify-center overflow-hidden bg-black">
      {/* 3. DYNAMIC MEDIA ENGINE */}
      <div className="absolute inset-0 z-0">
        {content.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-50 grayscale transition-all duration-1000 hover:grayscale-0"
          >
            <source src={content.video} type="video/mp4" />
          </video>
        ) : content.image ? (
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src={content.image}
            className="h-full w-full object-cover opacity-60 grayscale"
            alt="Hero Background"
          />
        ) : null}

        {/* Dynamic Overlay Color from JSON */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to top, #050505 0%, ${content.overlay} 50%, #050505 100%)`,
          }}
        />
      </div>

      {/* 4. CONTENT LAYER */}
      <div className="relative z-20 max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-8 inline-block rounded-full border border-[var(--primary)]/10 bg-[var(--primary)]/5 px-4 py-2 font-mono text-[10px] font-black tracking-[0.6em] text-[var(--primary)] uppercase">
            {data.id === "about_hero" ? "The Heritage" : "High-Fidelity Dining"}
          </span>

          <h1 className="font-secondary mb-10 text-6xl leading-[0.8] font-black tracking-tighter text-white md:text-9xl">
            {content.title}
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-medium text-gray-400 md:text-2xl">
            {content.subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            {/* Primary Action */}
            {content.primaryBtn && (
              <Link href={content.primaryLink}>
                <button className="group flex items-center gap-2 rounded-full bg-[var(--primary)] px-10 py-5 text-xs font-black tracking-widest text-black uppercase shadow-[0_20px_40px_rgba(6,182,212,0.2)] transition-all hover:scale-105">
                  {content.primaryBtn}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            )}

            {/* Secondary Action (Only if exists in JSON) */}
            {content.secondaryBtn && (
              <button className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-5 text-xs font-black tracking-widest text-white uppercase backdrop-blur-xl transition-all hover:bg-white/10">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all group-hover:bg-[var(--primary)] group-hover:text-black">
                  <Play className="h-3 w-3 fill-current" />
                </div>
                {content.secondaryBtn}
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* 5. DECORATIVE ELEMENTS */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-4">
        <span className="text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-12 w-[1px] bg-linear-to-b from-[var(--primary)] to-transparent"
        />
      </div>

      {/* Bottom Gradient for smooth section transition */}
      <div className="absolute bottom-0 z-10 h-40 w-full bg-linear-to-t from-[#050505] to-transparent" />
    </section>
  );
}
