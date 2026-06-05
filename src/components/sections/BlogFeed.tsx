"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowUpRight, Search } from "lucide-react";

export default function BlogFeed({ data }: any) {
  const posts = data?.items || [];

  return (
    <section className="bg-[#050505] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Search/Filter Bar */}
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 font-mono text-xs tracking-[0.5em] text-[var(--primary)] uppercase">
              The Archive
            </h2>
            <h3 className="font-secondary text-5xl font-black tracking-tighter md:text-7xl">
              Insights & Code
            </h3>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              placeholder="Query the database..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-4 pr-6 pl-12 text-xs font-bold tracking-widest text-white uppercase transition-all focus:border-[var(--primary)] focus:outline-none"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any, i: number) => (
            <motion.div
              key={post.slug || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/5">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="rounded-lg border border-white/10 bg-black/60 px-4 py-1.5 text-[9px] font-black tracking-widest text-[var(--primary)] uppercase backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="px-2">
                  <div className="mb-4 flex items-center gap-4 text-[10px] font-black tracking-widest text-gray-600 uppercase">
                    <span>{post.date}</span>
                    <div className="h-1 w-1 rounded-full bg-gray-800" />
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </div>
                  </div>

                  <h4 className="font-secondary mb-4 text-3xl font-black tracking-tighter transition-colors group-hover:text-[var(--primary)]">
                    {post.title}
                  </h4>

                  <p className="mb-6 line-clamp-2 text-sm leading-relaxed font-medium text-gray-500">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                      By {post.author}
                    </span>
                    <ArrowUpRight className="h-5 w-5 transform text-gray-800 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--primary)]" />
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
