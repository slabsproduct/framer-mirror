/**
 * Types for the Mari & Simón Wedding Platform
 */

export interface Guest {
  name: string;
  isAttending: boolean;
  dietaryRestrictions: string; // 'none' | 'celiac' | 'vegan' | 'vegetarian' | 'allergy' | string
  notes?: string;
  needsTransport?: boolean;
  transportLocation?: string;
}

export interface Invitation {
  code: string;
  names: string;
  passes: number;
  status: 'pending' | 'confirmed' | 'declined';
  updatedAt?: string;
  guests: Guest[];
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  watercolorAsset?: string;
}

export interface LocationDetail {
  name: string;
  subtitle: string;
  address: string;
  description: string;
  lat: number;
  lng: number;
  mapUrl: string;
}

export interface HotelDetail {
  name: string;
  stars: number;
  description: string;
  distance: string;
  link: string;
}

export interface FlightDetail {
  from: string;
  to: string;
  duration: string;
  details: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
