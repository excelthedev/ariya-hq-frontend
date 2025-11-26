// User-related types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface Planner {
  id: string;
  userId: string;
  company?: string;
  bio?: string;
  profileImage?: string;
  contactNumber?: string;
  location?: string;
  experienceYears?: number;
  specialties?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Vendor {
  id: string;
  userId: string;
  businessName: string;
  serviceType: string;
  description?: string;
  profileImage?: string;
  contactNumber?: string;
  email: string;
  location?: string;
  rating?: number;
  portfolioImages?: string[];
  pricingInfo?: string;
  availability?: string[];
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'planner' | 'vendor' | 'admin';

// Event-related types
export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  location: string;
  eventType: string;
  budget: number;
  status: EventStatus;
  plannerId: string;
  vendorIds: string[];
  clientId: string;
  createdAt: string;
  updatedAt: string;
}

export type EventStatus = 'draft' | 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';

// Quote-related types
export interface Quote {
  id: string;
  eventId: string;
  vendorId: string;
  plannerId: string;
  message: string;
  price: number;
  status: QuoteStatus;
  createdAt: string;
  updatedAt: string;
}

export type QuoteStatus = 'pending' | 'accepted' | 'rejected' | 'negotiating';

// Client-related types
export interface Client {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber?: string;
  address?: string;
  events: Event[];
  createdAt: string;
  updatedAt: string;
}

// Service-related types
export interface Service {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  duration?: string;
  maxGuests?: number;
  createdAt: string;
  updatedAt: string;
}

// Shared types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}