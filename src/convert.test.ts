import { describe, expect, it } from "vitest";
import { convertColor, parseColor } from "./convert.ts";

describe("parseColor", () => {
	it("parses hex colors", () => {
		expect(parseColor("#ff6347")).toBeDefined();
		expect(parseColor("#FFF")).toBeDefined();
		expect(parseColor("#00000080")).toBeDefined();
	});

	it("parses rgb colors", () => {
		expect(parseColor("rgb(255, 99, 71)")).toBeDefined();
		expect(parseColor("rgb(0, 0, 0)")).toBeDefined();
	});

	it("parses hsl colors", () => {
		expect(parseColor("hsl(9, 100%, 64%)")).toBeDefined();
	});

	it("parses oklch colors", () => {
		expect(parseColor("oklch(0.6962 0.1955 32.32)")).toBeDefined();
	});

	it("parses named colors", () => {
		expect(parseColor("tomato")).toBeDefined();
		expect(parseColor("white")).toBeDefined();
	});

	it("returns undefined for invalid input", () => {
		expect(parseColor("not-a-color")).toBeUndefined();
		expect(parseColor("")).toBeUndefined();
		expect(parseColor("xyz789")).toBeUndefined();
	});
});

describe("convertColor", () => {
	it("converts hex to oklch", () => {
		const result = convertColor("#ff6347", "oklch");
		expect(result).toMatch(/^oklch\(/);
	});

	it("converts hex to rgb", () => {
		expect(convertColor("#ff6347", "rgb")).toBe("rgb(255, 99, 71)");
	});

	it("converts rgb to hex", () => {
		expect(convertColor("rgb(255, 99, 71)", "hex")).toBe("#ff6347");
	});

	it("converts named color to hex", () => {
		expect(convertColor("tomato", "hex")).toBe("#ff6347");
	});

	it("round-trips hex -> oklch -> hex", () => {
		const oklch = convertColor("#ff6347", "oklch");
		const hex = convertColor(oklch, "hex");
		expect(hex).toBe("#ff6347");
	});

	it("round-trips hex -> hsl -> hex", () => {
		const hsl = convertColor("#336699", "hsl");
		const hex = convertColor(hsl, "hex");
		expect(hex).toBe("#336699");
	});

	it("round-trips hex -> lab -> hex", () => {
		const lab = convertColor("#ff6347", "lab");
		const hex = convertColor(lab, "hex");
		expect(hex).toBe("#ff6347");
	});

	it("throws for invalid color input", () => {
		expect(() => convertColor("not-a-color", "hex")).toThrow("Could not parse color");
	});

	it("converts shorthand hex", () => {
		const result = convertColor("#FFF", "rgb");
		expect(result).toBe("rgb(255, 255, 255)");
	});

	it("converts hex with alpha", () => {
		const result = convertColor("#ff634780", "hex");
		expect(result).toBe("#ff634780");
	});
});
