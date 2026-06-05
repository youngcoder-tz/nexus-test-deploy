"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function MapSection({ business }: any) {
  return (
    <section className="border-t border-white/5 bg-[#050505] px-6 py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* INFO SIDE */}
        <div className="space-y-12">
          <div>
            <h2 className="mb-4 font-mono text-xs tracking-[0.5em] text-[var(--primary)] uppercase">
              Coordinates
            </h2>
            <h3 className="font-secondary text-5xl font-black tracking-tighter md:text-6xl">
              Visit the Lab
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-500 uppercase">
                <MapPin className="h-3.5 w-3.5" /> Headquarters
              </div>
              <p className="text-lg leading-tight font-bold text-white">
                {business.address}
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-500 uppercase">
                <Phone className="h-3.5 w-3.5" /> Direct Line
              </div>
              <p className="text-lg leading-tight font-bold text-white">
                {business.phone}
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-500 uppercase">
                <Clock className="h-3.5 w-3.5" /> Operating Hours
              </div>
              <ul className="space-y-1 text-sm font-medium text-gray-500">
                {Object.entries(business.openingHours).map(
                  ([day, hours]: any) => (
                    <li key={day} className="flex justify-between">
                      <span className="capitalize">{day}</span>
                      <span className="font-mono text-white">{hours}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-500 uppercase">
                <Mail className="h-3.5 w-3.5" /> Transmission
              </div>
              <p className="text-lg leading-tight font-bold text-white">
                {business.email}
              </p>
            </div>
          </div>
        </div>

        {/* ARTISTIC MAP SIDE */}
        <div className="group relative aspect-square overflow-hidden rounded-[3rem] border border-white/10">
          {/* Using a Styled Static Map or High-res Interior Shot */}
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200"
            className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
            alt="Dar es Salaam Location"
          />
          <div className="absolute inset-0 bg-[var(--primary)]/10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

          {/* Floating Map Pin HUD */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-4 animate-ping rounded-full bg-[var(--primary)] opacity-20" />
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-2xl">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
            <p className="mb-1 text-[10px] font-black tracking-widest text-gray-500 uppercase">
              Current Sector
            </p>
            <p className="text-sm font-bold text-white uppercase">
              Ocean Road • North Dar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
