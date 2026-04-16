const items = [
  "Clinics",
  "Coaching",
  "Real estate",
  "Salons",
  "Boutiques",
  "Restaurants",
];

export default function SocialProof() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-white/60">
            Trusted by growing local businesses (placeholder)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {items.map((x) => (
              <span
                key={x}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
