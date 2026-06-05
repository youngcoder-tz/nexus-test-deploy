import { Clock, ArrowRight, Search, Filter } from "lucide-react";
import Link from "next/link";
import { getPageData } from "@/lib/getData";

export default async function BlogArchive() {
  const { page } = await getPageData("blog");
  const hero = page.sections
    .find((s: any) => s.id === "blog_hero")
    ?.fields.reduce(
      (acc: any, f: any) => ({ ...acc, [f.id]: f.defaultValue }),
      {},
    );
  const posts =
    page.sections.find((s: any) => s.id === "blog_posts")?.items || [];

  return (
    <div className="min-h-screen bg-[#050505] px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* HEADER SECTION */}
        <header className="mb-24 flex flex-col items-end justify-between gap-12 lg:flex-row">
          <div className="max-w-3xl">
            <h1 className="font-secondary mb-8 text-7xl leading-[0.85] font-black tracking-tighter uppercase md:text-9xl">
              {hero?.title || "The Journal"}
            </h1>
            <p className="max-w-xl border-l-2 border-primary pl-6 text-xl font-medium text-gray-500">
              {hero?.description ||
                "Scientific articles on Swahili spices and high-tech farming."}
            </p>
          </div>
          <div className="flex w-full gap-4 lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                placeholder="QUERY ARCHIVE..."
                className="w-full rounded-full border border-white/10 bg-white/5 py-4 pr-6 pl-12 text-[10px] font-black tracking-widest uppercase outline-none focus:border-primary"
              />
            </div>
            <button className="rounded-full border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* POSTS GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any, i: number) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group">
              <article className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/2 transition-all duration-500 hover:border-(--primary)/50">
                <div className="relative aspect-16/10 overflow-hidden bg-gray-900">
                  <img
                    src={post.cover}
                    className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                    alt={post.title}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="rounded-lg border border-white/10 bg-black/60 px-4 py-1.5 text-[9px] font-black tracking-widest text-primary uppercase backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-10">
                  <div className="mb-6 flex items-center gap-4 text-[10px] font-black tracking-widest text-gray-600 uppercase">
                    <span>{post.date}</span>
                    <div className="h-1 w-1 rounded-full bg-gray-800" />
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </div>
                  </div>

                  <h2 className="font-secondary mb-4 text-3xl leading-tight font-black tracking-tighter transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mb-8 line-clamp-3 text-sm leading-relaxed font-medium text-gray-500">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
                    <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase italic">
                      By {post.author}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all group-hover:bg-primary group-hover:text-black">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
