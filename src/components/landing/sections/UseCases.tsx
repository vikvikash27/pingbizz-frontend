"use client";

import { useMemo, useState } from "react";

const data = {
  Salon: [
    "Auto-reply with services & prices",
    "Book appointment + reminders",
    "Broadcast offers to past clients",
  ],
  Clinic: [
    "Timings, fees, location instantly",
    "Appointment booking + reminders",
    "Human handoff to receptionist",
  ],
  Coaching: [
    "Answer batch/fees/timings instantly",
    "Capture student details + follow-up",
    "Book demo class / counselling",
  ],
  Store: [
    "Share catalog + price list quickly",
    "Capture enquiries + follow-ups",
    "Broadcast new arrivals & deals",
  ],
} as const;

type Tab = keyof typeof data;

export default function UseCases() {
  const tabs = useMemo(() => Object.keys(data) as Tab[], []);
  const [active, setActive] = useState<Tab>("Salon");

  return (
    <section id="use-cases" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Made for local businesses
          </h2>
          <p className="mt-2 text-white/70">
            Pick your category — flows are ready in minutes.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={[
                "rounded-full px-4 py-2 text-sm transition border",
                isActive
                  ? "bg-[#25D366] text-black border-transparent"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10",
              ].join(" ")}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
        <div className="text-sm font-semibold">{active}</div>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {data[active].map((x) => (
            <li
              key={x}
              className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/75"
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#25D366]" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
