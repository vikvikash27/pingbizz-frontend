"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { ROLE_PERMISSIONS, getRoleFromStorage, Role } from "@/lib/permissions";

type NavItem = {
  href: string;
  label: string;
  key: keyof typeof ROLE_PERMISSIONS.owner;
};

function cx(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const pathname = usePathname();
  const role: Role = useMemo(() => getRoleFromStorage(), []);
  const perms = ROLE_PERMISSIONS[role];

  const nav: NavItem[] = [
    { href: "/dashboard", label: "Dashboard", key: "dashboard" },
    { href: "/inbox", label: "Inbox", key: "inbox" },
    { href: "/leads", label: "Leads", key: "leads" },
    { href: "/campaigns", label: "Campaigns", key: "campaigns" },
    { href: "/analytics", label: "Analytics", key: "analytics" },
    { href: "/team", label: "Team", key: "team" },
    { href: "/settings", label: "Settings", key: "settings" },
    { href: "/billing", label: "Billing", key: "billing" },
  ];

  return (
    <aside className="h-screen w-64 shrink-0 border-r border-white/10 bg-[#0B0F17] text-white">
      <div className="p-4">
        <div className="text-lg font-semibold">PingBiz</div>
        <div className="mt-1 text-xs text-white/60">Role: {role}</div>
      </div>

      <nav className="px-2 pb-4">
        {nav
          .filter((item) => perms[item.key])
          .map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cx(
                  "mb-1 block rounded-xl px-3 py-2 text-sm transition",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </a>
            );
          })}
      </nav>

      <div className="mt-auto p-4 text-xs text-white/50">
        Hide-by-role is UI only. Backend still enforces permissions.
      </div>
    </aside>
  );
}
