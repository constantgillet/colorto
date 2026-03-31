import { type Color, converter, formatHex, formatHex8, formatHsl, formatRgb } from "culori";
import type { ColorFormat } from "./types.ts";

function round(n: number, decimals = 2): number {
	const factor = 10 ** decimals;
	return Math.round(n * factor) / factor;
}

function hasAlpha(color: Color): boolean {
	return color.alpha !== undefined && color.alpha < 1;
}

function alphaStr(color: Color): string {
	return hasAlpha(color) ? ` / ${round(color.alpha as number)}` : "";
}

export function formatColor(color: Color, format: ColorFormat): string {
	switch (format) {
		case "hex": {
			return hasAlpha(color) ? formatHex8(color) : formatHex(color);
		}
		case "rgb": {
			return formatRgb(color);
		}
		case "hsl": {
			return formatHsl(color);
		}
		case "hwb": {
			const c = converter("hwb")(color);
			const h = round(c.h ?? 0);
			const w = round((c.w ?? 0) * 100);
			const b = round((c.b ?? 0) * 100);
			return `hwb(${h} ${w}% ${b}%${alphaStr(c)})`;
		}
		case "lab": {
			const c = converter("lab")(color);
			const l = round(c.l ?? 0);
			const a = round(c.a ?? 0);
			const b = round(c.b ?? 0);
			return `lab(${l}% ${a} ${b}${alphaStr(c)})`;
		}
		case "lch": {
			const c = converter("lch")(color);
			const l = round(c.l ?? 0);
			const ch = round(c.c ?? 0);
			const h = round(c.h ?? 0);
			return `lch(${l}% ${ch} ${h}${alphaStr(c)})`;
		}
		case "oklab": {
			const c = converter("oklab")(color);
			const l = round(c.l ?? 0, 4);
			const a = round(c.a ?? 0, 4);
			const b = round(c.b ?? 0, 4);
			return `oklab(${l} ${a} ${b}${alphaStr(c)})`;
		}
		case "oklch": {
			const c = converter("oklch")(color);
			const l = round(c.l ?? 0, 4);
			const ch = round(c.c ?? 0, 4);
			const h = round(c.h ?? 0, 2);
			return `oklch(${l} ${ch} ${h}${alphaStr(c)})`;
		}
	}
}
