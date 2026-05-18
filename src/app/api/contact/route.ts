import { NextResponse } from "next/server";
import { appendJsonFile } from "@/lib/json-store";
import { contactSchema } from "@/lib/validations";
import type { ContactMessage } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validare eșuată", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const message: ContactMessage = {
      id: crypto.randomUUID(),
      ...parsed.data,
      createdAt: new Date().toISOString(),
    };

    await appendJsonFile<ContactMessage>("contacts.json", message);

    return NextResponse.json(
      { id: message.id, message: "Mesaj trimis" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Nu s-a putut trimite mesajul" },
      { status: 500 }
    );
  }
}
