export type RentalStatus =
  | "inquiry"
  | "pending_payment"
  | "paid"
  | "picked_up"
  | "returned"
  | "cancelled"
  | "overdue";

export interface RentalInquiry {
  id: string;
  gameSlug: string;
  gameTitle: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  startDate: string;
  endDate: string;
  status: RentalStatus;
  totalAmountCents?: number;
  depositAmountCents?: number;
  stripePaymentIntentId?: string;
  stripeCheckoutSessionId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRentalPayload {
  gameSlug: string;
  gameTitle: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  startDate: string;
  endDate: string;
}
