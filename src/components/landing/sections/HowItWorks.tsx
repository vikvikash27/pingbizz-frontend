const steps = [
  {
    n: "01",
    title: "Connect WhatsApp",
    desc: "Link your business number and verify messaging.",
  },
  {
    n: "02",
    title: "Build flows",
    desc: "Choose templates for replies, lead fields, bookings, and follow-ups.",
  },
  {
    n: "03",
    title: "Go live",
    desc: "Start capturing leads instantly with reports and handoff to staff.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
      <p className="mt-2 text-white/70">
        Simple setup. Real results. No tech headache.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-xs text-white/55">{s.n}</div>
            <div className="mt-2 text-base font-semibold">{s.title}</div>
            <div className="mt-2 text-sm text-white/70">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
