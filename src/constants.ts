import type { ColorFormat } from "./types.ts";

export const FORMAT_LIST: { key: ColorFormat; label: string; example: string }[] = [
	{ key: "hex", label: "HEX", example: "#ff6347" },
	{ key: "rgb", label: "RGB", example: "rgb(255, 99, 71)" },
	{ key: "hsl", label: "HSL", example: "hsl(9, 100%, 64%)" },
	{ key: "hwb", label: "HWB", example: "hwb(9 0% 0%)" },
	{ key: "lab", label: "LAB", example: "lab(62% 57 39)" },
	{ key: "lch", label: "LCH", example: "lch(62% 69 34)" },
	{ key: "oklab", label: "OKLAB", example: "oklab(0.63 0.16 0.07)" },
	{ key: "oklch", label: "OKLCH", example: "oklch(0.63 0.18 29)" },
];
