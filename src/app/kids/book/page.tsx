import { PageHero } from "@/components/shared/page-hero";
import { SocialContact } from "@/components/shared/social-contact";
import { Box } from "@/components/ui/box";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.kids.metaTitle };
}

export default async function KidsBookPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <>
      <PageHero
        title={d.socialContact.headline}
        description={d.socialContact.subtext}
        variant="immersive"
        className="dz-hero-kids"
      />
      <section className="cozy-section pb-24 pt-2">
        <Box className="cozy-container flex justify-center">
          <SocialContact
            headline={d.socialContact.headline}
            subtext={d.socialContact.subtext}
            labels={{
              whatsapp: d.socialContact.whatsapp,
              instagram: d.socialContact.instagram,
              facebook: d.socialContact.facebook,
            }}
          />
        </Box>
      </section>
    </>
  );
}
