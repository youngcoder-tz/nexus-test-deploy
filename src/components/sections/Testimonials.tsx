"use client";
import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

export default function Testimonials({ data }: any) {
  const reviews = data?.items || [];

  return (
    <section className="bg-[#080808] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-mono text-xs tracking-[0.5em] text-[var(--primary)] uppercase">
            Social Proof
          </h2>
          <h3 className="font-secondary text-5xl font-black tracking-tighter">
            Critic Consensus
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex h-full flex-col rounded-[2.5rem] border border-white/5 bg-white/2 p-10"
            >
              {/* RATING */}
              <div className="mb-8 flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${idx < review.rating ? "fill-[var(--accent)] text-[var(--accent)]" : "text-gray-800"}`}
                  />
                ))}
              </div>

              <p className="mb-10 flex-1 text-xl leading-relaxed font-medium text-gray-300 italic">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 grayscale">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black tracking-widest uppercase">
                      {review.author}
                    </h4>
                    {review.verified && (
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-500" />
                    )}
                  </div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
