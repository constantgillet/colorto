import { describe, expect, it } from "vitest";
import { FORMAT_LIST } from "./constants.ts";
import { isValidFormat } from "./utils.ts";

describe("isValidFormat", () => {
	it("returns true for valid formats", () => {
		for (const f of FORMAT_LIST) {
			expect(isValidFormat(f.key)).toBe(true);
		}
	});

	it("returns false for invalid formats", () => {
		expect(isValidFormat("invalid")).toBe(false);
		expect(isValidFormat("")).toBe(false);
		expect(isValidFormat("RGB")).toBe(false);
	});
});
