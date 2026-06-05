"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero({ data }: any) {
  const f = data.fields.reduce(
    (acc: any, curr: any) => ({ ...acc, [curr.id]: curr.defaultValue }),
    {},
  );

  const {
    page_type = "home", // 'home' | 'about'
    bg_video,
    bg_image,
    eyebrow,
    headline,
    subtext,
    primary_cta,
    primary_cta_link,
    secondary_cta,
    secondary_cta_link,
  } = f;

  const isHome = page_type === "home";

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${isHome ? "h-screen min-h-[800px]" : "h-[75vh] min-h-[600px]"}`}
    >
      {/* Background Media */}
      {bg_video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
        >
          <source src={bg_video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={bg_image}
          alt={headline}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-[#050505]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block font-mono text-xs tracking-[0.5em] text-[var(--primary)] uppercase"
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`font-secondary mb-8 leading-[0.9] font-black tracking-tighter ${isHome ? "text-6xl md:text-9xl" : "text-5xl md:text-7xl"}`}
        >
          {headline}
        </motion.h1>

        {subtext && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-12 max-w-2xl text-lg font-light text-gray-400 md:text-xl"
          >
            {subtext}
          </motion.p>
        )}

        {(primary_cta || secondary_cta) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-6 md:flex-row"
          >
            {primary_cta && (
              <a
                href={primary_cta_link || "#"}
                className="rounded-[var(--radius-lg)] bg-[var(--primary)] px-10 py-5 text-xs font-black tracking-widest text-black uppercase transition-transform hover:scale-105"
              >
                {primary_cta}
              </a>
            )}

            {secondary_cta && (
              <a
                href={secondary_cta_link || "#"}
                className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-white/10 bg-white/5 px-8 py-5 text-xs font-bold tracking-widest uppercase backdrop-blur-md transition-all hover:bg-white/10"
              >
                <Play className="h-4 w-4 fill-white" />
                {secondary_cta}
              </a>
            )}
          </motion.div>
        )}
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 h-32 w-full bg-linear-to-t from-[#050505] to-transparent" />
    </section>
  );
}
