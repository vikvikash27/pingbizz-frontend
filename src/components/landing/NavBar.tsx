const links = [
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use-cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A0F]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#25D366]" />
          </span>
          <span className="text-sm font-semibold tracking-wide">PingBizz</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 md:inline-block"
          >
            Book demo
          </a>
          <a
            href="#final-cta"
            className="rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-black hover:brightness-110 transition"
          >
            Start free
          </a>
        </div>
      </div>
    </header>
  );
}
