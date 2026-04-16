const pains = [
  {
    title: "Missed leads",
    desc: "Late replies mean lost customers and wasted ad spend.",
  },
  {
    title: "Messy follow-ups",
    desc: "No reminders = no conversions. Leads go cold fast.",
  },
  {
    title: "No system",
    desc: "Chats, calls, notes scattered — impossible to track properly.",
  },
];

const outcomes = [
  {
    title: "Instant replies",
    desc: "Auto-response within seconds, even after hours.",
  },
  {
    title: "Booked faster",
    desc: "Capture details + book visits/appointments/demo classes.",
  },
  {
    title: "Clear pipeline",
    desc: "Stages + notes + daily report so nothing slips.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Stop losing customers in WhatsApp.
          </h2>
          <p className="mt-3 text-white/70">
            PingBiz turns your inbox into a simple system: capture → qualify →
            follow-up → book.
          </p>

          <div className="mt-6 space-y-3">
            {pains.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-sm font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-white/65">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            Outcomes
          </div>
          <div className="mt-5 space-y-3">
            {outcomes.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="text-sm font-semibold">{o.title}</div>
                <div className="mt-1 text-sm text-white/65">{o.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#25D366]/10 p-4">
            <div className="text-sm font-semibold text-[#25D366]">
              “Automation that feels human.”
            </div>
            <div className="mt-1 text-sm text-white/70">
              No spam. No complexity. Just helpful messaging with clear handoff
              to staff.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
