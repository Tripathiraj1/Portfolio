import type { MouseEvent } from "react";

/** Prefix a /public path with the deploy basePath (needed for GitHub Pages project sites). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export type Origin = { x: number; y: number };

/** Where the circle reveal should grow from: the pointer, or the element centre for keyboard clicks. */
export function originFromEvent(e: MouseEvent<HTMLElement>): Origin {
  if (e.clientX || e.clientY) return { x: e.clientX, y: e.clientY };
  const r = e.currentTarget.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}
