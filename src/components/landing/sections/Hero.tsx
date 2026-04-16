function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-sm font-semibold">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            WhatsApp → Business OS
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Turn WhatsApp into your{" "}
            <span className="text-[#25D366]">sales & support</span> system.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Auto-replies, lead capture, bookings, follow-ups, and broadcast
            campaigns — without hiring a team. Built for local businesses.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-black hover:brightness-110 transition"
            >
              Start free
            </a>
            <a
              href="#use-cases"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              See use-cases
            </a>
          </div>

          <p className="mt-4 text-xs text-white/55">
            Compliance-first messaging: opt-in, respectful templates, STOP
            keyword support.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <Stat label="Avg reply time" value="< 10 sec" />
            <Stat label="Leads captured" value="24×7" />
            <Stat label="Setup time" value="~15 min" />
          </div>
        </div>

        {/* Mock UI preview */}
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <div className="text-xs text-white/60">PingBiz Dashboard</div>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="grid grid-cols-3 gap-3">
                {["New leads", "Active chats", "Bookings"].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <div className="text-xs text-white/60">{t}</div>
                    <div className="mt-1 text-lg font-semibold">12</div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-white/60">
                    Latest conversation
                  </div>
                  <div className="text-[10px] text-white/50">just now</div>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="max-w-[80%] rounded-2xl bg-white/10 px-3 py-2 text-sm text-white/85">
                    Hi! I want pricing for your service.
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl bg-[#25D366] px-3 py-2 text-sm text-black">
                    Sure — please share your name & city. I’ll send details and
                    a booking link.
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="h-9 flex-1 rounded-xl border border-white/10 bg-black/20" />
                  <div className="grid h-9 w-10 place-items-center rounded-xl bg-white/10">
                    <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-white/60">Follow-ups due</div>
                  <div className="mt-1 text-lg font-semibold">7</div>
                  <div className="mt-2 text-xs text-white/55">
                    Auto sequences: D+1, D+3, D+7
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-white/60">Broadcast ready</div>
                  <div className="mt-1 text-lg font-semibold">3 segments</div>
                  <div className="mt-2 text-xs text-white/55">
                    Schedule campaigns safely
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}
