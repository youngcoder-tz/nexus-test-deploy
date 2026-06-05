"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function BookingForm({ settings }: any) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ date: "", guests: 2, time: "" });

  const steps = [
    { id: 1, label: "Temporal Node", icon: Calendar },
    { id: 2, label: "Capacity", icon: Users },
    { id: 3, label: "Calibration", icon: Clock },
  ];

  return (
    <section className="bg-[#050505] px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-mono text-xs tracking-[0.5em] text-[var(--primary)] uppercase">
            Protocol: Reserve
          </h2>
          <h3 className="font-secondary text-5xl font-black tracking-tighter md:text-6xl">
            Secure Your Table
          </h3>
        </div>

        <div className="overflow-hidden rounded-[3rem] border border-white/5 bg-[#0A0A0A] shadow-2xl">
          {/* Progress Header */}
          <div className="flex border-b border-white/5 bg-white/2">
            {steps.map((s) => (
              <div
                key={s.id}
                className={`flex flex-1 items-center justify-center gap-3 border-r border-white/5 py-6 transition-all last:border-0 ${step === s.id ? "bg-[var(--primary)]/10 text-[var(--primary)]" : "text-gray-600"}`}
              >
                <s.icon className="h-4 w-4" />
                <span className="hidden text-[10px] font-black tracking-widest uppercase md:block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="p-12 md:p-20">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  key="step1"
                  className="space-y-8 text-center"
                >
                  <h4 className="font-secondary text-3xl font-black tracking-tight">
                    Select Arrival Date
                  </h4>
                  <input
                    type="date"
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 font-mono text-xl text-white [color-scheme:dark] outline-none focus:border-[var(--primary)]"
                  />
                  <button
                    onClick={() => setStep(2)}
                    className="rounded-full bg-white px-12 py-5 text-xs font-black tracking-widest text-black uppercase transition-all hover:bg-[var(--primary)]"
                  >
                    Next Module
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  key="step2"
                  className="space-y-12 text-center"
                >
                  <h4 className="font-secondary text-3xl font-black tracking-tight">
                    Specify Guest Count
                  </h4>
                  <div className="flex items-center justify-center gap-8">
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          guests: Math.max(1, formData.guests - 1),
                        })
                      }
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-3xl font-black hover:bg-white/5"
                    >
                      -
                    </button>
                    <span className="font-mono text-8xl font-black text-[var(--primary)]">
                      {formData.guests}
                    </span>
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          guests: Math.min(
                            settings.maxPartySize,
                            formData.guests + 1,
                          ),
                        })
                      }
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-3xl font-black hover:bg-white/5"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => setStep(3)}
                    className="rounded-full bg-white px-12 py-5 text-xs font-black tracking-widest text-black uppercase transition-all hover:bg-[var(--primary)]"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  key="step3"
                  className="space-y-8 text-center"
                >
                  <h4 className="font-secondary text-3xl font-black tracking-tight">
                    Confirm Protocol
                  </h4>
                  <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
                    <div className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-[10px] font-black text-gray-500 uppercase">
                        Date
                      </span>
                      <span className="font-mono">{formData.date}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-[10px] font-black text-gray-500 uppercase">
                        Capacity
                      </span>
                      <span className="font-mono">
                        {formData.guests} Persons
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] font-black text-gray-500 uppercase">
                        Status
                      </span>
                      <span className="font-black text-emerald-500">
                        AVAILABLE
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(4)}
                    className="w-full rounded-full bg-[var(--primary)] py-6 text-xs font-black tracking-widest text-black uppercase shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
                  >
                    Initiate Reservation
                  </button>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key="step4"
                  className="py-10 text-center"
                >
                  <CheckCircle2 className="mx-auto mb-8 h-20 w-20 text-emerald-500" />
                  <h4 className="font-secondary mb-4 text-4xl font-black tracking-tight">
                    Transmission Successful
                  </h4>
                  <p className="mx-auto mb-8 max-w-sm text-gray-500">
                    Your reservation node has been added to our primary queue.
                    Check your email for the confirmation cipher.
                  </p>
                  <button
                    onClick={() => setStep(1)}
                    className="border-b border-[var(--primary)] text-[10px] font-black tracking-widest text-[var(--primary)] uppercase"
                  >
                    Book Another Node
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
