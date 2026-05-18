import Link from "next/link";
import { Calendar, Package, Truck } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

const STEP_ICONS = [Package, Calendar, Truck];

export async function generateMetadata() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return { title: d.rent.metaTitle };
}

export default async function RentPage() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <>
      <PageHero
        title={d.rent.heroTitle}
        description={d.rent.heroDescription}
      >
        <Button asChild size="lg" className="rounded-full">
          <Link href="/library">{d.rent.browseCta}</Link>
        </Button>
      </PageHero>

      <section className="cozy-section pb-20">
        <Box className="cozy-container">
          <Box className="grid gap-6 md:grid-cols-3">
            {d.rent.steps.map((item, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Card key={item.title} className="cozy-card">
                  <CardHeader>
                    <Box className="cozy-icon-wrap mb-3">
                      <Icon className="h-6 w-6" />
                    </Box>
                    <CardTitle className="font-serif font-medium">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {item.text}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </Box>
        </Box>
      </section>
    </>
  );
}
