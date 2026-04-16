const features = [
  {
    title: "Smart auto-replies",
    desc: "Hours, keywords, and intent-aware responses that feel natural.",
  },
  {
    title: "Lead capture forms",
    desc: "Collect name, need, city, budget/service — inside WhatsApp.",
  },
  {
    title: "Bookings + reminders",
    desc: "Appointments, demos, site visits — with reminder templates.",
  },
  {
    title: "Broadcast campaigns",
    desc: "Segment + schedule campaigns safely (compliance-first).",
  },
  {
    title: "Follow-up sequences",
    desc: "D+1, D+3, D+7 follow-ups to convert more leads automatically.",
  },
  {
    title: "Team inbox",
    desc: "Assign chats, add notes, tags, and keep ownership clear.",
  },
];

function IconDot() {
  return (
    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#25D366]" />
  );
}

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Everything you need to win on WhatsApp.
          </h2>
          <p className="mt-2 text-white/70">
            Built for local businesses: fast setup, clear workflows, and
            measurable outcomes.
          </p>
        </div>
        <a
          href="#pricing"
          className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 md:inline-block"
        >
          View pricing
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/20">
                <IconDot />
              </div>
              <div className="text-sm font-semibold">{f.title}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
