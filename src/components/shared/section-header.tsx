import { Box } from "@/components/ui/box";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  centered,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}) {
  return (
    <Box
      className={cn(
        centered && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="dz-eyebrow mb-3">{eyebrow}</p>
      )}
      <h2 className="dz-section-title">{title}</h2>
      {subtitle && (
        <p className={cn("dz-section-subtitle", centered ? "mx-auto" : undefined)}>
          {subtitle}
        </p>
      )}
    </Box>
  );
}
