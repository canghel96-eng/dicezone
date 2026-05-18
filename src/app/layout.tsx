import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lora, Nunito } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { getDictionary } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import "./globals.css";

const sans = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

const serif = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const d = getDictionary(locale);
  return {
    title: {
      default: d.meta.defaultTitle,
      template: `%s | DiceZone`,
    },
    description: d.meta.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen font-sans text-foreground">
        <LocaleProvider locale={locale}>
          <Header />
          <main className="min-h-[calc(100vh-8rem)]">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
