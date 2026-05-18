"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Box } from "@/components/ui/box";

export function ContactForm() {
  const searchParams = useSearchParams();
  const { dict: d } = useLocale();
  const cf = d.contactForm;
  const ui = d.ui;
  const b = d.booking;

  const success = searchParams.get("success");
  const inquiryId = searchParams.get("id");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  if (success && inquiryId) {
    const typeLabel =
      success === "rental" ? cf.rental : cf.booking;
    const body = cf.thankYouBody
      .replace("{type}", typeLabel)
      .replace("{ref}", inquiryId.slice(0, 8));

    return (
      <Box className="cozy-card rounded-2xl border-primary/20 bg-cozy-warm/60 p-8 text-center">
        <h2 className="font-serif text-2xl font-semibold">{ui.thankYou}</h2>
        <p className="mt-2 text-muted-foreground">{body}</p>
      </Box>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          subject: subject || undefined,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || cf.failedSend);
        return;
      }

      setSent(true);
    } catch {
      setError(ui.networkError);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <Box className="cozy-card rounded-2xl p-8 text-center">
        <p className="font-serif text-lg font-semibold">{ui.messageSent}</p>
        <p className="mt-1 text-sm text-muted-foreground">{cf.sentBack}</p>
      </Box>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <Box>
        <Label htmlFor="cname">{cf.name}</Label>
        <Input
          id="cname"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box>
        <Label htmlFor="cemail">{b.email}</Label>
        <Input
          id="cemail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box>
        <Label htmlFor="cphone">{b.phone}</Label>
        <Input
          id="cphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Box>
      <Box>
        <Label htmlFor="csub">{cf.subject}</Label>
        <Input
          id="csub"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </Box>
      <Box>
        <Label htmlFor="cmsg">{cf.message}</Label>
        <Textarea
          id="cmsg"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Box>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" className="rounded-full" disabled={loading}>
        {loading ? ui.sending : ui.sendMessage}
      </Button>
    </form>
  );
}
