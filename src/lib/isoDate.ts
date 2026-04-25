// Strict ISO 8601 (YYYY-MM-DD) date utilities.
// All date inputs in this app MUST be stored and processed as ISO 8601 internally.
// Never store or compare dates in dd/mm or mm/dd format.

export interface IsoDateParts {
  year: number;
  month: number; // 1-12
  day: number;   // 1-31
}

const ISO_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Parse a strict ISO 8601 date string (YYYY-MM-DD) into labelled parts.
 * Returns null for any non-ISO input. Does NOT infer format from position —
 * the year/month/day fields are taken directly from their named positions.
 */
export function parseIsoDate(input: string): IsoDateParts | null {
  if (typeof input !== "string") return null;
  const m = ISO_RE.exec(input.trim());
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (month < 1 || month > 12) return null;
  if (day < 1 || day > 31) return null;
  // Validate real calendar date (e.g. reject 02-30)
  const d = new Date(Date.UTC(year, month - 1, day));
  if (
    d.getUTCFullYear() !== year ||
    d.getUTCMonth() !== month - 1 ||
    d.getUTCDate() !== day
  ) {
    return null;
  }
  return { year, month, day };
}

/**
 * Convert ISO date string to a local-timezone Date at midnight.
 * Avoids the `new Date("YYYY-MM-DD")` UTC-parsing pitfall that can shift
 * the calendar day in negative-offset timezones.
 */
export function isoToLocalDate(input: string): Date | null {
  const parts = parseIsoDate(input);
  if (!parts) return null;
  return new Date(parts.year, parts.month - 1, parts.day);
}

/**
 * Extract calendar month + day (1-indexed) from an ISO date string.
 * Used for birthday matching — only the calendar month/day matter, not the year.
 */
export function getMonthDay(input: string): { month: number; day: number } | null {
  const parts = parseIsoDate(input);
  if (!parts) return null;
  return { month: parts.month, day: parts.day };
}
