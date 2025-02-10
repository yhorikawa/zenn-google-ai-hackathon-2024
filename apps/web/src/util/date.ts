import { format } from "date-fns";

export function dateFormatFull(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  const formatted = format(d, "EEEE, MMMM d, yyyy");
  return formatted.toUpperCase();
}

export function dateFormatShort(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  const formatted = format(d, "yyyy-MM-dd (EEE)");
  return formatted.toUpperCase();
}
