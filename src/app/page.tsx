import { Box } from "@/components/ui/box";

export default async function HomePage() {
  return (
    <section className="cozy-section flex min-h-screen items-center">
      <Box className="cozy-container">
        <Box className="cozy-card mx-auto max-w-3xl px-6 py-16 text-center sm:px-10 sm:py-20">
          <p className="dz-eyebrow">DiceZone</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Website-ul nu este gata încă.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Lucrăm la noua experiență DiceZone și vom fi live în curând.
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Revenim în curând
          </p>
        </Box>
      </Box>
    </section>
  );
}
