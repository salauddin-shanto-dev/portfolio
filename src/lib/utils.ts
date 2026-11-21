import type { Period, YearMonth } from "@/content/types";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Formats "2025-08" as "Aug 2025". Locale-independent to keep static output stable. */
export function formatYearMonth(value: YearMonth): string {
  const [year, month] = value.split("-");
  const label = MONTHS[Number(month) - 1];
  if (!year || !label) {
    throw new Error(`Invalid year-month value: "${value}"`);
  }
  return `${label} ${year}`;
}

export function formatPeriod(period: Period): string {
  const end = period.end === "present" ? "Present" : formatYearMonth(period.end);
  return `${formatYearMonth(period.start)} – ${end}`;
}

/** Normalizes a pathname so "/about" and "/about/" compare equal. */
export function normalizePath(pathname: string): string {
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}
