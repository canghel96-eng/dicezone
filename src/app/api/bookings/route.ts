import { NextResponse } from "next/server";
import { appendJsonFile } from "@/lib/json-store";
import { bookingSchema } from "@/lib/validations";
import type { BookingInquiry } from "@/types/booking";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validare eșuată", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const booking: BookingInquiry = {
      id: crypto.randomUUID(),
      status: "inquiry",
      ...parsed.data,
      createdAt: now,
      updatedAt: now,
    };

    await appendJsonFile<BookingInquiry>("bookings.json", booking);

    return NextResponse.json(
      { id: booking.id, message: "Solicitare de rezervare primită" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Nu s-a putut salva solicitarea" },
      { status: 500 }
    );
  }
}
