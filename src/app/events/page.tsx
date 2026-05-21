import { CalendarDays, Clock, MapPin, Ticket, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

const TICKET_FORM_URL =
  "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform";

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.publicEvents.metaTitle };
}

export default async function PublicEventsPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <>
      <PageHero
        title={d.publicEvents.heroTitle}
        description={d.publicEvents.heroDescription}
      />

      <section className="cozy-section pb-20">
        <Box className="cozy-container">
          <SectionHeader
            eyebrow={d.publicEvents.listEyebrow}
            title={d.publicEvents.listTitle}
            subtitle={d.publicEvents.listSubtitle}
            centered
          />

          <Box className="mt-12 grid gap-6 lg:grid-cols-3">
            {d.publicEvents.events.map((event) => (
              <Card
                key={`${event.title}-${event.date}`}
                className="cozy-card flex h-full flex-col overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/40">
                  <span className="cozy-pill w-fit">
                    {d.publicEvents.eventDetails}
                  </span>
                  <CardTitle className="font-serif text-2xl font-semibold leading-tight">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-5 pt-6">
                  <Box className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p className="flex gap-3">
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{event.date}</span>
                    </p>
                    <p className="flex gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{event.time}</span>
                    </p>
                    <p className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cozy-sage" />
                      <span>{event.location}</span>
                    </p>
                    <p className="flex gap-3">
                      <Ticket className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{event.price}</span>
                    </p>
                    <p className="flex gap-3">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{event.spots}</span>
                    </p>
                  </Box>

                  <Button asChild className="mt-auto rounded-full" size="lg">
                    <a
                      href={TICKET_FORM_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {d.publicEvents.bookTicket}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </section>
    </>
  );
}
