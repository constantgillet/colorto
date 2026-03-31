import { parse } from "culori";
import { describe, expect, it } from "vitest";
import { formatColor } from "./format-color.ts";
import type { ColorFormat } from "./types.ts";

describe("formatColor", () => {
	const red = parse("#ff6347") as NonNullable<ReturnType<typeof parse>>;
	const white = parse("#ffffff") as NonNullable<ReturnType<typeof parse>>;
	const black = parse("#000000") as NonNullable<ReturnType<typeof parse>>;
	const semiTransparent = parse("#ff634780") as NonNullable<ReturnType<typeof parse>>;

	it("formats to hex", () => {
		expect(formatColor(red, "hex")).toBe("#ff6347");
		expect(formatColor(white, "hex")).toBe("#ffffff");
		expect(formatColor(black, "hex")).toBe("#000000");
	});

	it("formats to hex with alpha", () => {
		expect(formatColor(semiTransparent, "hex")).toBe("#ff634780");
	});

	it("formats to rgb", () => {
		expect(formatColor(red, "rgb")).toBe("rgb(255, 99, 71)");
		expect(formatColor(white, "rgb")).toBe("rgb(255, 255, 255)");
	});

	it("formats to hsl", () => {
		const result = formatColor(red, "hsl");
		expect(result).toMatch(/^hsl\(/);
		expect(result).toContain("%");
	});

	it("formats to hwb", () => {
		const result = formatColor(red, "hwb");
		expect(result).toMatch(/^hwb\(/);
		expect(result).toContain("%");
	});

	it("formats to lab", () => {
		const result = formatColor(red, "lab");
		expect(result).toMatch(/^lab\(/);
		expect(result).toContain("%");
	});

	it("formats to lch", () => {
		const result = formatColor(red, "lch");
		expect(result).toMatch(/^lch\(/);
	});

	it("formats to oklab", () => {
		const result = formatColor(red, "oklab");
		expect(result).toMatch(/^oklab\(/);
	});

	it("formats to oklch", () => {
		const result = formatColor(red, "oklch");
		expect(result).toMatch(/^oklch\(/);
	});

	it("preserves alpha in all formats", () => {
		const formats: ColorFormat[] = ["hwb", "lab", "lch", "oklab", "oklch"];
		for (const format of formats) {
			const result = formatColor(semiTransparent, format);
			expect(result).toContain("/");
		}
	});
});
