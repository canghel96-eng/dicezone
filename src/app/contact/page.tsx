import { PageHero } from "@/components/shared/page-hero";
import { SocialContact } from "@/components/shared/social-contact";
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

      <section className="cozy-section pb-24 pt-2">
        <Box className="cozy-container flex flex-col items-center gap-10">
          <SocialContact
            headline={d.socialContact.headline}
            subtext={d.socialContact.subtext}
            labels={{
              whatsapp: d.socialContact.whatsapp,
              instagram: d.socialContact.instagram,
              facebook: d.socialContact.facebook,
            }}
          />

          <p className="text-sm text-muted-foreground">
            {d.contact.emailLabel}{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-primary hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Box>
      </section>
    </>
  );
}
