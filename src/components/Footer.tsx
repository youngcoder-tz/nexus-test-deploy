"use client";
import Link from "next/link";
import { IconRenderer } from "./IconRenderer";

export default function Footer({ footer, config }: any) {
  return (
    <footer className="border-t border-white/5 bg-[#080808] px-6 pt-32 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND COLUMN */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                <span className="text-2xl leading-none font-black text-black">
                  K
                </span>
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">
                {config.siteName}
              </span>
            </Link>
            <p className="max-w-xs leading-relaxed font-medium text-gray-500">
              {config.tagline}. Redefining the boundaries of Swahili culinary
              arts.
            </p>
            <div className="flex gap-4">
              {footer.social.map((soc: any) => (
                <a
                  key={soc.platform}
                  href={soc.url}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all hover:bg-[var(--primary)] hover:text-black"
                >
                  <IconRenderer name={soc.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* DYNAMIC COLUMNS FROM JSON */}
          {footer.columns.map((col: any, i: number) => (
            <div key={i} className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-white uppercase">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link: any, j: number) => (
                  <li key={j}>
                    <Link
                      href={link.url}
                      className="font-medium text-gray-500 transition-colors hover:text-[var(--primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* NEWSLETTER / CONTACT */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.3em] text-white uppercase">
              Updates
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Join the inner circle for molecular secrets and seasonal drops.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm focus:border-[var(--primary)] focus:outline-none"
                />
                <button className="absolute top-2 right-2 rounded-lg bg-white px-4 py-2 text-[10px] font-black text-black uppercase">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
          <div className="font-mono text-[10px] tracking-widest text-gray-700 uppercase">
            © 2026 {config.siteName} • All Rights Reserved • Molecular Grade 1.2
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
            <span className="cursor-pointer hover:text-white">Privacy</span>
            <span className="cursor-pointer hover:text-white">Terms</span>
            <span className="cursor-pointer hover:text-white">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
