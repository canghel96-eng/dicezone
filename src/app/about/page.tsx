import Image from "next/image";
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

      <section className="cozy-section">
        <Box className="cozy-container">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Founder photo */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-border/60 shadow-[var(--shadow-cozy-lg)]">
                <Image
                  src="/images/founder.webp"
                  alt="Founder of DiceZone with board games"
                  width={768}
                  height={1024}
                  className="w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-sm italic text-muted-foreground">
                {d.about.photoCaption}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-foreground">
                {formatRegion(d.about.intro, d.siteRegion)}
              </p>

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {d.about.whatTitle}
                </h2>
                <ul className="mt-4 space-y-2">
                  {d.about.whatItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {d.about.approachTitle}
                </h2>
                <div className="mt-4 space-y-4">
                  <p className="leading-relaxed text-muted-foreground">
                    {d.about.approach1}
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    {d.about.approach2}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Box>
      </section>
    </>
  );
}
