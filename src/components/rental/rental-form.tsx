"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/games";
import type { Game } from "@/types/game";
import { Box } from "@/components/ui/box";

export function RentalForm({ game }: { game: Game }) {
  const router = useRouter();
  const { locale, dict: d } = useLocale();
  const r = d.rental;
  const ui = d.ui;
  const b = d.booking;

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availability, setAvailability] = useState<string | null>(null);

  async function checkAvailability() {
    if (!startDate || !endDate) return;
    const params = new URLSearchParams({
      gameSlug: game.slug,
      startDate,
      endDate,
    });
    const res = await fetch(`/api/rentals?${params}`);
    const data = await res.json();
    setAvailability(data.available ? r.available : r.maybeUnavailable);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/rentals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameSlug: game.slug,
          gameTitle: game.title,
          contactName,
          contactEmail,
          contactPhone: contactPhone || undefined,
          startDate,
          endDate,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || ui.somethingWrong);
        return;
      }

      router.push(`/contact?success=rental&id=${data.id}`);
    } catch {
      setError(ui.networkError);
    } finally {
      setLoading(false);
    }
  }

  const daily = game.rentalPricePerDayCents;

  return (
    <form
      onSubmit={submit}
      className="cozy-card space-y-4 border-0 p-6 sm:p-8"
    >
      <h3 className="font-serif text-xl font-semibold">{r.title}</h3>
      {daily && (
        <p className="text-sm text-muted-foreground">
          {formatPrice(daily, locale)} {ui.perDayWord} {r.priceNote}
        </p>
      )}

      <Box>
        <Label htmlFor="start">{r.startDate}</Label>
        <Input
          id="start"
          type="date"
          required
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          onBlur={checkAvailability}
        />
      </Box>
      <Box>
        <Label htmlFor="end">{r.endDate}</Label>
        <Input
          id="end"
          type="date"
          required
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          onBlur={checkAvailability}
        />
      </Box>
      {availability && (
        <p className="text-sm text-muted-foreground">{availability}</p>
      )}

      <Box>
        <Label htmlFor="rname">{r.yourName}</Label>
        <Input
          id="rname"
          required
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />
      </Box>
      <Box>
        <Label htmlFor="remail">{b.email}</Label>
        <Input
          id="remail"
          type="email"
          required
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
      </Box>
      <Box>
        <Label htmlFor="rphone">{b.phone}</Label>
        <Input
          id="rphone"
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
        />
      </Box>

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" className="w-full rounded-full" disabled={loading}>
        {loading ? ui.submitting : r.submit}
      </Button>
    </form>
  );
}
