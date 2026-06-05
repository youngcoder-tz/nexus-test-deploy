import { notFound } from "next/navigation";
import { Clock, User, ChevronLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { getSiteSchema } from "@/lib/getData";
import Image from "next/image";

async function getArticle(slug: string) {
  const schema = await getSiteSchema();
  const blogPage = schema.pages.find((p: any) => p.id === "blog");
  const post = blogPage?.sections
    .find((s: any) => s.id === "posts")
    ?.items.find((p: any) => p.slug === slug);
  return post;
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getArticle(params.slug);

  // if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* 1. PROGRESS BAR (Simulation) */}
      <div className="fixed top-0 right-0 left-0 z-110 h-1.5 bg-white/5">
        <div className="h-full w-1/4 bg-primary shadow-[0_0_15px_var(--primary)]" />
      </div>

      {/* 2. COVER HERO */}
      <header className="relative flex h-[60vh] w-full items-end md:h-[70vh]">
        <Image
          src={post.cover}
          fill
          className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale"
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/40 to-transparent" />

        <div className="relative z-10 w-full p-8 md:p-20">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="mb-8 flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-primary uppercase transition-all hover:gap-4"
            >
              <ChevronLeft className="h-4 w-4" /> Back to Journal
            </Link>

            <div className="mb-6 flex gap-3">
              <span className="rounded-md bg-primary px-4 py-1.5 text-[10px] font-black tracking-widest text-black uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="font-secondary mb-8 text-5xl leading-[0.85] font-black tracking-tighter md:text-8xl">
              {post.title}
            </h1>

            <div className="flex items-center gap-8 text-gray-500">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-xs font-black tracking-widest text-white uppercase">
                  {post.author}
                </span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2 font-mono text-xs font-bold">
                <Clock className="h-4 w-4 text-primary" /> {post.readTime} READ
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. CONTENT AREA */}
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="flex gap-20">
          {/* Side Tools (Desktop) */}
          <aside className="sticky top-32 hidden h-fit flex-col gap-6 xl:flex">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all hover:bg-white/10 hover:text-white">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all hover:bg-white/10 hover:text-white">
              <Bookmark className="h-4 w-4" />
            </button>
          </aside>

          {/* Article Body */}
          <article className="flex-1">
            <div
              className="prose prose-invert prose-xl prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mb-10 prose-p:font-medium prose-headings:font-black prose-headings:font-secondary prose-headings:tracking-tighter prose-headings:text-white prose-h2:text-5xl prose-h2:mt-20 prose-h2:mb-10 prose-img:rounded-[2.5rem] prose-img:border prose-img:border-white/5 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Cloud */}
            <div className="mt-32 flex flex-wrap gap-3 border-t border-white/5 pt-10">
              {["Molecular", "Gastronomy", "Heritage", "Tanzania"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="cursor-pointer rounded-xl border border-white/5 bg-white/2 px-4 py-2 text-[10px] font-black text-gray-600 uppercase transition-all hover:border-primary hover:text-white"
                  >
                    #{tag}
                  </span>
                ),
              )}
            </div>
          </article>
        </div>
      </div>

      {/* 4. NEWSLETTER CTA */}
      <section className="border-y border-white/5 bg-[#080808] px-6 py-32">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-secondary mb-6 text-4xl font-black tracking-tighter">
            Stay Synced.
          </h2>
          <p className="mb-10 text-gray-500">
            Join 50k+ readers receiving weekly code for the kitchen.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 font-mono text-xs focus:border-primary focus:outline-none"
            />
            <button className="rounded-2xl bg-white px-8 py-4 text-[10px] font-black tracking-widest text-black uppercase">
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
