import { PageHero } from "@/components/shared/page-hero";
import { Box } from "@/components/ui/box";
import { formatRegion, getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.about.metaTitle };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <>
      <PageHero
        title={d.about.heroTitle}
        description={d.about.heroDescription}
      />

      <section className="cozy-section-alt pb-20">
        <Box className="cozy-container max-w-3xl">
          <Box className="cozy-card space-y-6 p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-foreground">
              {formatRegion(d.about.intro, d.siteRegion)}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {d.about.photoCaption}
            </p>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              {d.about.whatTitle}
            </h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed text-muted-foreground">
              {d.about.whatItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              {d.about.approachTitle}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {d.about.approach1}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {d.about.approach2}
            </p>
          </Box>
        </Box>
      </section>
    </>
  );
}
