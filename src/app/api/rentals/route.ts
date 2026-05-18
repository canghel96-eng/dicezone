import { NextResponse } from "next/server";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import { getGameBySlug } from "@/lib/games";
import { appendJsonFile, readJsonFile } from "@/lib/json-store";
import { rentalSchema } from "@/lib/validations";
import type { RentalInquiry } from "@/types/rental";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameSlug = searchParams.get("gameSlug");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  if (!gameSlug || !startDate || !endDate) {
    return NextResponse.json(
      { error: "gameSlug, startDate și endDate sunt obligatorii" },
      { status: 400 }
    );
  }

  const game = getGameBySlug(gameSlug, DEFAULT_LOCALE);
  if (!game) {
    return NextResponse.json({ error: "Jocul nu a fost găsit" }, { status: 404 });
  }

  const rentals = await readJsonFile<RentalInquiry>("rentals.json");
  const overlapping = rentals.filter(
    (r) =>
      r.gameSlug === gameSlug &&
      r.status !== "cancelled" &&
      r.startDate <= endDate &&
      r.endDate >= startDate
  );

  const available = overlapping.length === 0;

  return NextResponse.json({
    available,
    gameSlug,
    startDate,
    endDate,
    message: available
      ? "Jocul pare disponibil pentru aceste date"
      : "Jocul poate fi indisponibil — poți trimite oricum o solicitare",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = rentalSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validare eșuată", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (parsed.data.endDate < parsed.data.startDate) {
      return NextResponse.json(
        { error: "Data de sfârșit trebuie să fie după data de început" },
        { status: 400 }
      );
    }

    const game = getGameBySlug(parsed.data.gameSlug, DEFAULT_LOCALE);
    if (!game?.tags.includes("rentable")) {
      return NextResponse.json(
        { error: "Acest joc nu este disponibil pentru închiriere" },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const rental: RentalInquiry = {
      id: crypto.randomUUID(),
      status: "inquiry",
      ...parsed.data,
      createdAt: now,
      updatedAt: now,
    };

    await appendJsonFile<RentalInquiry>("rentals.json", rental);

    return NextResponse.json(
      { id: rental.id, message: "Solicitare de închiriere primită" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Nu s-a putut salva solicitarea de închiriere" },
      { status: 500 }
    );
  }
}
