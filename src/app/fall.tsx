"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  Trophy,
  Calendar,
  MapPin,
  ArrowRight,
  Flame,
  Heart,
  Mic2,
} from "lucide-react";
import { BsGithub, BsTwitter } from "react-icons/bs";

// --- DATA ---
const CHANNELS = [
  {
    name: "Discord",
    desc: "The daily hangout. Live code help, memes, and beta access.",
    count: "5.2k Members",
    icon: MessageSquare,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    url: "#",
  },
  {
    name: "GitHub",
    desc: "The code forge. Contribute to core SDKs and report bugs.",
    count: "1.8k Stars",
    icon: BsGithub,
    color: "text-gray-200",
    bg: "bg-gray-500/10",
    border: "border-gray-500/20",
    url: "#",
  },
  {
    name: "Twitter / X",
    desc: "The news feed. Announcements, shoutouts, and hot takes.",
    count: "12k Followers",
    icon: BsTwitter,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    url: "#",
  },
];

const EVENTS = [
  {
    title: "NexusHack 2025",
    date: "OCT 15",
    type: "Global Hackathon",
    location: "Online / Dar es Salaam",
    icon: Trophy,
  },
  {
    title: "Gora AI Deep Dive",
    date: "NOV 02",
    type: "Livestream",
    location: "YouTube Live",
    icon: Mic2,
  },
  {
    title: "Nairobi Dev Meetup",
    date: "NOV 20",
    type: "In-Person",
    location: "iHub, Nairobi",
    icon: MapPin,
  },
];

const CHAMPIONS = [
  { name: "Juma Dev", role: "Core Contributor", xp: "12,400 XP", avatar: "JD" },
  { name: "Sarah Code", role: "Community Mod", xp: "9,200 XP", avatar: "SC" },
  { name: "TechNinja", role: "Plugin Builder", xp: "8,100 XP", avatar: "TN" },
];

// --- COMPONENTS ---

// 1. Live Activity Ticker
const LiveTicker = () => (
  <div className="bg-background/50 border-border/40 w-full overflow-hidden border-y py-3 backdrop-blur-sm">
    <div className="animate-marquee text-muted-foreground flex gap-12 font-mono text-xs whitespace-nowrap">
      {[...Array(5)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            @alex_dev just deployed a new store
          </span>
          <span className="flex items-center gap-2">
            <BsGithub className="h-3 w-3" />
            New PR merged: &quot;Fix payment gateway timeout&quot;
          </span>
          <span className="flex items-center gap-2">
            <MessageSquare className="h-3 w-3 text-indigo-400" />
            34 users online in #general
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

// 2. Channel Card
const ChannelCard = ({
  item,
  index,
}: {
  item: (typeof CHANNELS)[0];
  index: number;
}) => (
  <motion.a
    href={item.url}
    target="_blank"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`group bg-background/50 relative flex h-64 flex-col justify-between overflow-hidden rounded-3xl border p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${item.border}`}
  >
    <div
      className={`absolute inset-0 bg-linear-to-br ${item.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
    />

    <div className="relative z-10">
      <div
        className={`bg-background border-border mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-lg ${item.color}`}
      >
        <item.icon className="h-7 w-7" />
      </div>
      <h3 className="mb-2 text-2xl font-bold">{item.name}</h3>
      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
    </div>

    <div className="relative z-10 mt-auto flex items-center justify-between">
      <span className="font-mono text-sm font-bold opacity-70">
        {item.count}
      </span>
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full border border-current opacity-0 transition-all duration-300 group-hover:opacity-100 ${item.color}`}
      >
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  </motion.a>
);

export default function CommunityPage() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-hidden selection:bg-indigo-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-32 pb-10">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs text-indigo-400">
            <Users className="h-3 w-3" />
            GLOBAL POPULATION: 12,402
          </div>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
            Join the <br />
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hive Mind.
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg md:text-xl">
            NexusHub isn&apos;t just a platform; it&apos;s a movement. Connect
            with the builders, founders, and engineers shaping the digital
            future of Africa.
          </p>

          <LiveTicker />
        </div>
      </section>

      {/* 2. CHANNEL GRID */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {CHANNELS.map((channel, i) => (
              <ChannelCard key={channel.name} item={channel} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. HALL OF FAME & EVENTS (Bento Grid) */}
      <section className="bg-muted/5 border-border/40 border-y px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left: Leaderboard */}
            <div className="space-y-6 lg:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <Flame className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold">Top Contributors</h2>
              </div>
              <div className="bg-background border-border/50 rounded-3xl border p-6 shadow-xl">
                {CHAMPIONS.map((champ, i) => (
                  <div
                    key={i}
                    className="border-border/30 flex items-center gap-4 border-b py-4 last:border-0"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-yellow-400 to-orange-500 text-xs font-bold text-white">
                      {champ.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold">{champ.name}</h4>
                      <p className="text-muted-foreground text-xs">
                        {champ.role}
                      </p>
                    </div>
                    <div className="text-primary bg-primary/10 rounded px-2 py-1 font-mono text-xs font-bold">
                      {champ.xp}
                    </div>
                  </div>
                ))}
                <button className="mt-4 w-full text-xs">
                  View Full Leaderboard
                </button>
              </div>
            </div>

            {/* Right: Events Radar */}
            <div className="lg:col-span-3">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-pink-500" />
                  <h2 className="text-2xl font-bold">Event Radar</h2>
                </div>
                <button className="rounded-full">Subscribe</button>
              </div>

              <div className="space-y-4">
                {EVENTS.map((event, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="from-background to-muted/30 border-border/50 group flex cursor-pointer flex-col gap-6 rounded-2xl border bg-linear-to-r p-6 transition-all hover:border-pink-500/30 sm:flex-row sm:items-center"
                  >
                    <div className="bg-muted border-border flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl border transition-colors group-hover:border-pink-500/50 group-hover:bg-pink-500/10">
                      <span className="text-xs font-bold text-pink-500 uppercase">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="text-xl font-bold">
                        {event.date.split(" ")[1]}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-muted-foreground bg-muted rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold transition-colors group-hover:text-pink-500">
                        {event.title}
                      </h3>
                      <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                        <event.icon className="h-3 w-3" />
                        {event.location}
                      </div>
                    </div>

                    <div className="shrink-0">
                      <button className="w-full rounded-full sm:w-auto">
                        RSVP
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AMBASSADOR CTA */}
      <section className="px-6 py-24 text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-[3rem] border border-indigo-500/30 bg-linear-to-br from-indigo-900/50 to-purple-900/50 p-8">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10">
              <Heart className="mx-auto mb-6 h-12 w-12 animate-bounce text-pink-500" />
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Become a Nexus Ambassador
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-indigo-200">
                Host meetups, create content, and mentor new developers. Get
                exclusive swag, free Enterprise hosting, and direct access to
                our engineering team.
              </p>
              <div className="flex justify-center gap-4">
                <button className="rounded-full bg-white font-bold text-indigo-900 hover:bg-indigo-50">
                  Apply Now
                </button>
                <button className="rounded-full border-indigo-300 text-indigo-100 hover:bg-indigo-900/50">
                  Read Handbook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
