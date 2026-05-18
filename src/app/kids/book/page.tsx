import { BookingForm } from "@/components/booking/booking-form";
import { PageHero } from "@/components/shared/page-hero";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.kids.bookMetaTitle };
}

export default async function KidsBookPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <>
      <PageHero
        title={d.kids.bookHeroTitle}
        description={d.kids.bookHeroDescription}
      />
      <section className="cozy-section-alt pb-24 pt-2">
        <BookingForm
          eventType="kids_education"
          title={d.kids.bookFormTitle}
        />
      </section>
    </>
  );
}
