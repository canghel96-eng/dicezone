import { createElement, type HTMLAttributes } from "react";

export function Box({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return createElement("div", { className, ...props }, children);
}
