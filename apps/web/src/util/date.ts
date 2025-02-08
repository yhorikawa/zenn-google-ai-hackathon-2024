export function dateFormat(date: Date) {
  return date.toDateString();
}

export function dateFormatYYYYMMDD(date: Date) {
  return date.toISOString().split("T")[0];
}
