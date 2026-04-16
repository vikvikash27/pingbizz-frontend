export default function FinalCTA() {
  return (
    <section id="final-cta" className="mx-auto max-w-6xl px-4 pb-20">
      <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-[#25D366]/15 via-white/5 to-indigo-500/15 p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Ready to stop missing leads?
            </h3>
            <p className="mt-2 text-white/70">
              Launch PingBiz in minutes and run WhatsApp like a real system.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-black hover:brightness-110 transition"
            >
              Start free
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Book demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
