export type EventType = "corporate" | "kids_education";

export type BookingStatus =
  | "inquiry"
  | "quoted"
  | "confirmed"
  | "completed"
  | "cancelled";

export type LocationType = "client_site" | "dicezone_arranged";

export interface BookingInquiry {
  id: string;
  eventType: EventType;
  status: BookingStatus;
  companyOrOrganization: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  teamSize?: number;
  childCount?: number;
  ageRange?: string;
  preferredDates: string[];
  locationType: LocationType;
  address?: string;
  message?: string;
  quotedAmountCents?: number;
  depositAmountCents?: number;
  stripePaymentIntentId?: string;
  stripeCheckoutSessionId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBookingPayload {
  eventType: EventType;
  companyOrOrganization: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  teamSize?: number;
  childCount?: number;
  ageRange?: string;
  preferredDates: string[];
  locationType: LocationType;
  address?: string;
  message?: string;
}
