"use client";
import { motion } from "framer-motion";
import { IconRenderer } from "../IconRenderer";
import { Mail, Phone, Globe } from "lucide-react";
import { LiaFacebook, LiaLinkedin } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const socialIcons: any = {
  instagram: CiInstagram,
  facebook: LiaFacebook, // Mapping fallback
  twitter: FaTwitter,
  linkedin: LiaLinkedin,
  email: Mail,
};

export default function TeamGrid({ data }: any) {
  const members = data?.items || [];

  return (
    <section className="bg-[#050505] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-4 font-mono text-xs tracking-[0.5em] text-[var(--primary)] uppercase"
            >
              The Human Code
            </motion.h2>
            <h3 className="font-secondary text-5xl leading-none font-black tracking-tighter md:text-7xl">
              Masters of Craft
            </h3>
          </div>
          <p className="max-w-xs border-l border-white/10 pl-6 font-medium text-gray-500 md:border-r md:border-l-0 md:pr-6 md:pl-0 md:text-right">
            Meet the engineers, scientists, and visionaries redefining Swahili
            gastronomy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member: any, i: number) => (
            <motion.div
              key={member.id || i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              {/* Portrait Container */}
              <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] border border-white/5 bg-[#0A0A0A]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Social Floating Bar */}
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 translate-y-4 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {member.socialLinks &&
                    Object.entries(member.socialLinks).map(
                      ([platform, url]: any) => {
                        const Icon =
                          socialIcons[platform.toLowerCase()] || Globe;
                        return (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/80 text-white backdrop-blur-xl transition-all hover:bg-[var(--primary)] hover:text-black"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        );
                      },
                    )}
                </div>

                {/* Years Experience Badge */}
                {member.yearsExperience && (
                  <div className="absolute top-6 right-6 rounded-md border border-white/10 bg-black/60 px-3 py-1 text-[9px] font-black tracking-widest text-cyan-500 uppercase backdrop-blur-md">
                    EXP: {member.yearsExperience}Y
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div>
                  <span className="mb-1 block text-[10px] font-black tracking-[0.2em] text-[var(--primary)] uppercase">
                    {member.role}
                  </span>
                  <h4 className="font-secondary text-4xl font-black tracking-tighter transition-colors group-hover:text-[var(--primary)]">
                    {member.name}
                  </h4>
                </div>

                {/* Expertise Chips */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise?.map((skill: string) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[8px] font-bold tracking-widest text-gray-500 uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bio - Rich Text Support */}
                <div
                  className="prose prose-invert line-clamp-3 text-sm leading-relaxed font-medium text-gray-500 opacity-80 transition-opacity group-hover:opacity-100"
                  dangerouslySetInnerHTML={{ __html: member.bio }}
                />

                {/* Contact Trigger */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-[1px] flex-1 bg-white/5" />
                  <button className="text-[9px] font-black tracking-[0.3em] text-gray-700 uppercase transition-colors hover:text-white">
                    Contact Engineer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
