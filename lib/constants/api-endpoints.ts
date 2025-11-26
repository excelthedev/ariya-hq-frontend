// API endpoint constants
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    VERIFY: '/auth/verify',
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE: '/users/update',
    DELETE: '/users/delete',
  },
  EVENTS: {
    BASE: '/events',
    CREATE: '/events',
    GET_BY_ID: (id: string) => `/events/${id}`,
    UPDATE: (id: string) => `/events/${id}`,
    DELETE: (id: string) => `/events/${id}`,
    LIST: '/events',
  },
  VENDORS: {
    BASE: '/vendors',
    LIST: '/vendors',
    GET_BY_ID: (id: string) => `/vendors/${id}`,
    SEARCH: '/vendors/search',
    AVAILABILITY: (id: string) => `/vendors/${id}/availability`,
  },
  PLANNERS: {
    BASE: '/planners',
    LIST: '/planners',
    GET_BY_ID: (id: string) => `/planners/${id}`,
  },
  QUOTES: {
    BASE: '/quotes',
    CREATE: '/quotes',
    LIST: '/quotes',
    GET_BY_ID: (id: string) => `/quotes/${id}`,
    UPDATE: (id: string) => `/quotes/${id}`,
    DELETE: (id: string) => `/quotes/${id}`,
  },
  CLIENTS: {
    BASE: '/clients',
    LIST: '/clients',
    GET_BY_ID: (id: string) => `/clients/${id}`,
    CREATE: '/clients',
    UPDATE: (id: string) => `/clients/${id}`,
  },
};