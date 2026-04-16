export type Role = "owner" | "admin" | "manager" | "staff";

export type PermissionKey =
  | "dashboard"
  | "inbox"
  | "leads"
  | "campaigns"
  | "analytics"
  | "team"
  | "settings"
  | "billing";

export const ROLE_PERMISSIONS: Record<Role, Record<PermissionKey, boolean>> = {
  owner: {
    dashboard: true,
    inbox: true,
    leads: true,
    campaigns: true,
    analytics: true,
    team: true,
    settings: true,
    billing: true,
  },
  admin: {
    dashboard: true,
    inbox: true,
    leads: true,
    campaigns: true,
    analytics: true,
    team: true,
    settings: true,
    billing: false,
  },
  manager: {
    dashboard: true,
    inbox: true,
    leads: true,
    campaigns: true,
    analytics: true,
    team: false,
    settings: false,
    billing: false,
  },
  staff: {
    dashboard: false,
    inbox: true,
    leads: true,
    campaigns: false,
    analytics: false,
    team: false,
    settings: false,
    billing: false,
  },
};

export function getRoleFromStorage(): Role {
  try {
    const raw = localStorage.getItem("pingbiz_user");
    const user = raw ? JSON.parse(raw) : null;
    const role = (user?.role || "staff") as Role;
    return role;
  } catch {
    return "staff";
  }
}
