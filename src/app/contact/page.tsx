import { Suspense } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { Box } from "@/components/ui/box";
import { formatRegion, getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.contact.metaTitle };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <>
      <PageHero
        title={d.contact.heroTitle}
        description={formatRegion(d.contact.heroDescription, d.siteRegion)}
      />

      <section className="cozy-section-alt pb-24 pt-2">
        <Box className="cozy-container grid max-w-4xl gap-12 lg:grid-cols-2">
          <Box>
            <h2 className="font-serif text-xl font-semibold">
              {d.contact.writeTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {d.contact.emailLabel}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {d.contact.formHint}{" "}
              <Link href="/corporate/book" className="text-primary hover:underline">
                {d.contact.formHintCorporate}
              </Link>{" "}
              {d.contact.formHintAnd}{" "}
              <Link href="/kids/book" className="text-primary hover:underline">
                {d.contact.formHintKids}
              </Link>
              .
            </p>
          </Box>

          <Suspense
            fallback={
              <p className="text-muted-foreground">{d.ui.loadingForm}</p>
            }
          >
            <ContactForm />
          </Suspense>
        </Box>
      </section>
    </>
  );
}
