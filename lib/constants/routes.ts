// Route constants
export const ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
  },
  PLANNER: {
    DASHBOARD: "/planner/dashboard",
    EVENTS: {
      BASE: "/planner/events",
      CREATE: "/planner/events/create",
      DETAIL: (id: string) => `/planner/events/${id}`,
    },
    CLIENTS: "/planner/clients",
    VENDORS: "/planner/vendors",
    QUOTES: "/planner/quotes",
    SETTINGS: "/planner/settings",
  },
  VENDOR: {
    DASHBOARD: "/vendor/dashboard",
    SERVICES: "/vendor/services",
    PORTFOLIO: "/vendor/portfolio",
    QUOTES: "/vendor/quotes",
    SETTINGS: "/vendor/settings",
  },
};

export const ROLE_BASED_ROUTES = {
  planner: [ROUTES.PLANNER.DASHBOARD, ROUTES.PLANNER.EVENTS.BASE],
  vendor: [ROUTES.VENDOR.DASHBOARD, ROUTES.VENDOR.SERVICES],
} as const;

const navigationItems =
  "planner" === "planner"
    ? [
        { name: "Dashboard", href: ROUTES.PLANNER.DASHBOARD },
        { name: "Events", href: ROUTES.PLANNER.EVENTS.BASE },
        { name: "Clients", href: ROUTES.PLANNER.CLIENTS },
        { name: "Vendors", href: ROUTES.PLANNER.VENDORS },
        { name: "Quotes", href: ROUTES.PLANNER.QUOTES },
      ]
    : [
        { name: "Dashboard", href: ROUTES.VENDOR.DASHBOARD },
        { name: "Services", href: ROUTES.VENDOR.SERVICES },
        { name: "Portfolio", href: ROUTES.VENDOR.PORTFOLIO },
        { name: "Quotes", href: ROUTES.VENDOR.QUOTES },
      ];
