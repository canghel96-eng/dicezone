import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

export default async function NotFound() {
  const locale = await getLocale();
  const d = getDictionary(locale);

  return (
    <Box className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <span className="font-serif text-7xl font-semibold text-primary/20">
        404
      </span>
      <h1 className="mt-2 font-serif text-2xl font-semibold">
        {d.notFound.title}
      </h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        {d.notFound.description}
      </p>
      <Button asChild className="mt-8 rounded-full">
        <Link href="/">{d.notFound.home}</Link>
      </Button>
    </Box>
  );
}
