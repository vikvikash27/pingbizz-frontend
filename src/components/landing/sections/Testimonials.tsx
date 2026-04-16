const testimonials = [
  {
    name: "Clinic Owner",
    title: "Patna",
    quote:
      "We stopped missing patient enquiries. Bookings increased because follow-ups were automatic.",
    metric: "+28% bookings",
  },
  {
    name: "Coaching Center",
    title: "Kankarbagh",
    quote:
      "Parents ask the same questions daily. Now replies are instant and our counsellor focuses on admissions.",
    metric: "2× faster replies",
  },
  {
    name: "Boutique Store",
    title: "Boring Road",
    quote:
      "Broadcasts to past customers brought repeat sales without spamming. Clean and simple.",
    metric: "+19% repeat buyers",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">
        Loved by operators, not just teams.
      </h2>
      <p className="mt-2 text-white/70">
        Outcome-based testimonials (replace with real ones later).
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-sm font-semibold">{t.metric}</div>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              “{t.quote}”
            </p>
            <div className="mt-5 text-xs text-white/55">
              <span className="font-semibold text-white/70">{t.name}</span> —{" "}
              {t.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
