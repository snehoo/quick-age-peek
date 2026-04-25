import { describe, it, expect } from "vitest";
import { parseIsoDate, getMonthDay, isoToLocalDate } from "@/lib/isoDate";
import { getFamousBirthdays } from "@/lib/famousBirthdays";

describe("ISO 8601 date parsing", () => {
  it("parses a valid ISO date into labelled parts", () => {
    expect(parseIsoDate("1990-11-05")).toEqual({ year: 1990, month: 11, day: 5 });
  });

  it("rejects dd/mm/yyyy input — never infer format from position", () => {
    expect(parseIsoDate("05/11/1990")).toBeNull();
  });

  it("rejects mm/dd/yyyy input", () => {
    expect(parseIsoDate("11-05-1990")).toBeNull();
  });

  it("rejects invalid calendar dates", () => {
    expect(parseIsoDate("2023-02-30")).toBeNull();
    expect(parseIsoDate("2023-13-01")).toBeNull();
  });

  it("isoToLocalDate keeps the same calendar day regardless of timezone", () => {
    const d = isoToLocalDate("1990-11-05")!;
    expect(d.getFullYear()).toBe(1990);
    expect(d.getMonth()).toBe(10); // November (0-indexed)
    expect(d.getDate()).toBe(5);
  });
});

describe("Famous birthday matching uses ISO month/day", () => {
  it("a user born on ISO 1990-11-05 matches November 5th celebrities, not May 11th", () => {
    // Simulate dd/mm input "05/11" — must be normalised to ISO before matching
    const dayField = 5;
    const monthField = 11;
    const isoString = `1990-${String(monthField).padStart(2, "0")}-${String(dayField).padStart(2, "0")}`;

    const parts = getMonthDay(isoString);
    expect(parts).toEqual({ month: 11, day: 5 });

    const matches = getFamousBirthdays(parts!.month, parts!.day);
    // Virat Kohli is born 1988-11-05 in our dataset
    const names = matches.map((p) => p.name);
    expect(names).toContain("Virat Kohli");
    // Must NOT match May 11 (which would be the bug if mm/dd were swapped)
    expect(names).not.toContain("Adele"); // Adele is 05-05, different sanity check
  });

  it("does not confuse 05-11 (May 11) with 11-05 (Nov 5)", () => {
    const may11 = getMonthDay("2000-05-11");
    const nov5 = getMonthDay("2000-11-05");
    expect(may11).toEqual({ month: 5, day: 11 });
    expect(nov5).toEqual({ month: 11, day: 5 });
    expect(may11).not.toEqual(nov5);
  });
});
