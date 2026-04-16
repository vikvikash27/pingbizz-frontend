const faqs = [
  {
    q: "Does PingBiz work for any business type?",
    a: "Yes. You configure your lead fields, booking types, FAQs, and follow-up rules. It’s designed to be multi-use.",
  },
  {
    q: "Is this a chatbot that can hallucinate?",
    a: "No. Core replies are based on your configured content (FAQs, flows). AI, if enabled, only rephrases approved text.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 10–20 minutes for basic flows. Advanced automation can be added later.",
  },
  {
    q: "Can I handoff to a human?",
    a: "Yes. A user can request “Talk to staff” and the conversation gets flagged for human follow-up.",
  },
  {
    q: "Do you support broadcasts?",
    a: "Yes, with segmentation and scheduling. Always use opt-in and compliant templates.",
  },
  {
    q: "What about compliance?",
    a: "We support opt-in records, STOP keyword, and respectful message rules. You should follow WhatsApp policies and local regulations.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
      <p className="mt-2 text-white/70">Clear answers to common questions.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#25D366]" />
              {f.q}
              <span className="float-right text-white/50 group-open:rotate-180 transition">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-sm text-white/70">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-[#25D366]/10 p-6">
        <div className="text-sm font-semibold text-[#25D366]">
          Compliance note
        </div>
        <p className="mt-2 text-sm text-white/75">
          PingBiz is designed for customer support + lead capture + bookings +
          notifications. Always collect opt-in, honor STOP/UNSUBSCRIBE keywords,
          and avoid spammy campaigns.
        </p>
      </div>
    </section>
  );
}
