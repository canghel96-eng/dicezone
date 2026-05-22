"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SiteShell({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = pathname === "/";

  return (
    <>
      {!hideChrome && header}
      <main
        className={cn(
          hideChrome ? "min-h-screen" : "min-h-[calc(100vh-8rem)]"
        )}
      >
        {children}
      </main>
      {!hideChrome && footer}
    </>
  );
}
