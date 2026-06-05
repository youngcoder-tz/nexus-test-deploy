import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { getSiteSchema } from "@/lib/getData";
import BookingForm from "@/components/sections/BookingForm";
import MapSection from "@/components/sections/MapSection";

export default async function ContactPage() {
  // 1. Fetch full schema safely
  const schema = await getSiteSchema();

  // 2. Defensive access with fallbacks
  const business = schema.settings?.business || {
    name: "Kipazi Fusion",
    address: "Location Data Missing",
    phone: "N/A",
    email: "N/A",
    openingHours: {},
  };

  const config = schema.config || {
    metadata: { region: "TZ", timezone: "EAT" },
  };
  const reservationSettings = schema.settings?.forms?.reservation || {
    maxPartySize: 10,
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="px-6 pt-40 pb-20 text-center">
        <h1 className="font-secondary mb-6 text-6xl leading-none font-black tracking-tighter uppercase md:text-9xl">
          RESERVATIONS<span className="text-primary">.</span>
        </h1>
        <p className="font-mono text-xs tracking-[0.5em] text-gray-500 uppercase">
          Secure your node in the culinary timeline
        </p>
      </section>

      {/* 3. BOOKING FORM (Passing safe settings) */}
      <BookingForm settings={reservationSettings} />

      {/* 4. MAP & LOCATION (Passing safe business data) */}
      <MapSection business={business} />

      {/* 5. QUICK INFO BAR */}
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
          <ContactCard
            icon={Mail}
            label="Direct Transmission"
            value={business.email}
          />
          <ContactCard
            icon={Phone}
            label="Voice Protocol"
            value={business.phone}
          />
          <ContactCard
            icon={Globe}
            label="Region Code"
            value={`${config.metadata?.region} • ${config.metadata?.timezone}`}
          />
        </div>
      </section>
    </div>
  );
}

// Small sub-component for the info cards
function ContactCard({ icon: Icon, label, value }: any) {
  return (
    <div className="group flex items-center gap-6 rounded-4xl border border-white/5 bg-white/2 p-8 transition-all hover:border-(--primary)/50">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary)/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase">
          {label}
        </p>
        <p className="text-sm font-bold text-gray-200">{value}</p>
      </div>
    </div>
  );
}
