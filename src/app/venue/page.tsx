import Link from "next/link";
import { Construction } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { formatRegion, getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.venue.metaTitle };
}

export default async function VenuePage() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <>
      <PageHero
        title={d.venue.heroTitle}
        description={d.venue.heroDescription}
      />

      <section className="cozy-section pb-20">
        <Box className="cozy-container max-w-2xl text-center">
          <Box className="cozy-card mx-auto max-w-md p-10">
            <Construction className="mx-auto h-14 w-14 text-accent" />
            <h2 className="mt-6 font-serif text-2xl font-semibold">
              {d.venue.comingTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {formatRegion(d.venue.comingText, d.siteRegion)}
            </p>
            <Button asChild className="mt-8 rounded-full" size="lg">
              <Link
                href={`mailto:${CONTACT_EMAIL}?subject=Partner%20venue%20interest`}
              >
                {d.venue.waitlist}
              </Link>
            </Button>
          </Box>
        </Box>
      </section>
    </>
  );
}
