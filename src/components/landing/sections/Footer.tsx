export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">PingBiz</div>
            <div className="mt-1 text-xs text-white/60">
              WhatsApp Automation for Small Businesses
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#use-cases">
              Use-cases
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} PingBiz. All rights reserved.
          <span>Powered by Vykon Ventures</span>
        </div>
      </div>
    </footer>
  );
}
