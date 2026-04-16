export default function CustomPrice() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-indigo-500/15 via-white/5 to-[#25D366]/15 p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              Custom (Enterprise)
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Need custom pricing for high-volume WhatsApp?
            </h3>

            <p className="mt-2 text-white/70">
              Tailored plans for enterprises, franchises, and heavy messaging use — with dedicated
              infrastructure, SLA support, and custom integrations (CRM/ERP).
            </p>

            <ul className="mt-5 space-y-2 text-sm text-white/75">
              {[
                "Multiple admins, unlimited managers & agents",
                "Dedicated account manager + onboarding",
                "Advanced security & compliance",
                "Custom workflows + integrations",
                "Unlimited messaging speed (based on infra)",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#25D366]" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end md:flex-col md:items-end">
            <a
              href="#final-cta"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-black hover:brightness-110 transition sm:w-auto"
            >
              Get Connected
            </a>

            <a
              href="#faq"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition sm:w-auto"
            >
              View FAQ
            </a>

            <div className="text-xs text-white/55 md:text-right">
              Tailored pricing based on your business needs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
