"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Philosophy({ data }: any) {
  // Extract fields into an object
  const f = data.fields.reduce(
    (acc: any, curr: any) => ({ ...acc, [curr.id]: curr.defaultValue }),
    {},
  );

  return (
    <section className="overflow-hidden bg-[#050505] px-6 py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="font-secondary pointer-events-none absolute -top-20 -left-10 text-[200px] font-black text-white/3 select-none">
            “
          </div>
          <div
            className="font-secondary prose-blockquote:border-none relative z-10 mb-10 text-3xl leading-[1.1] font-black tracking-tighter md:text-[38px]"
            dangerouslySetInnerHTML={{ __html: f.quote }}
          />
          <div className="mb-12 flex flex-col gap-1">
            <cite className="text-xs font-black tracking-[0.3em] text-primary uppercase not-italic">
              — {f.author}
            </cite>
            <span className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">
              {f.role}
            </span>
          </div>

          <Link href={f.cta_link || "/about"}>
            <button className="rounded-full border border-white/10 px-10 py-4 text-xs font-black tracking-widest uppercase transition-all hover:bg-white hover:text-black">
              {f.cta_text}
            </button>
          </Link>
        </motion.div>

        {/* VIDEO SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
          >
            <source src={f.video_url} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
