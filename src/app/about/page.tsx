import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Box } from "@/components/ui/box";
import { getDictionary } from "@/lib/i18n";
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
          <div className="mx-auto max-w-2xl">

            {/* Founder photo */}
            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-[var(--shadow-cozy-lg)]">
              <Image
                src="/images/founder.webp"
                alt="Founder of DiceZone with board games"
                width={768}
                height={1024}
                className="max-h-[32rem] w-full object-cover object-[50%_80%]"
                priority
              />
            </div>
            <p className="mb-10 mt-3 text-center text-sm italic text-muted-foreground">
              {d.about.photoCaption}
            </p>

            {/* Founder story */}
            <div className="space-y-5">
              {d.about.founderParagraphs.map((paragraph, i) => {
                const base = "font-semibold leading-relaxed text-muted-foreground";
                const last = "font-serif text-base font-semibold italic leading-relaxed text-accent";

                if (i === 1) {
                  const [p1Before, p1After] = paragraph.split(d.about.founderP1GameNames);
                  return (
                    <p key={i} className={base}>
                      {p1Before}<em>{d.about.founderP1GameNames}</em>{p1After}
                    </p>
                  );
                }

                if (i === 2) {
                  const [p2Before, p2Rest] = paragraph.split(d.about.founderP2Mechanics);
                  const [p2Middle, p2After] = (p2Rest ?? "").split(d.about.founderP2Translation);
                  return (
                    <p key={i} className={base}>
                      {p2Before}<em>{d.about.founderP2Mechanics}</em>{p2Middle}
                      <strong>{d.about.founderP2Translation}</strong>{p2After}
                    </p>
                  );
                }

                return (
                  <p key={i} className={i === d.about.founderParagraphs.length - 1 ? last : base}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

          </div>
        </Box>
      </section>
    </>
  );
}
