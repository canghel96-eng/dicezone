import { NextResponse } from "next/server";

/**
 * Stripe webhook handler (Phase 3).
 * Handle checkout.session.completed to confirm bookings/rentals
 * and set stripeCheckoutSessionId on records.
 */
export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Stripe webhook not configured" },
      { status: 501 }
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  // const body = await request.text();
  // const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  // switch (event.type) { ... }

  return NextResponse.json({ received: true });
}
