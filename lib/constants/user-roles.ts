// User role constants
export const USER_ROLES = {
  PLANNER: 'planner' as const,
  VENDOR: 'vendor' as const,
  ADMIN: 'admin' as const,
};

export const USER_ROLE_LABELS = {
  [USER_ROLES.PLANNER]: 'Event Planner',
  [USER_ROLES.VENDOR]: 'Vendor',
  [USER_ROLES.ADMIN]: 'Administrator',
};