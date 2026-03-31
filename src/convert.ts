import { parse } from "culori";
import { formatColor } from "./format-color.ts";
import type { ColorFormat } from "./types.ts";

export function parseColor(input: string) {
	return parse(input);
}

export function convertColor(input: string, format: ColorFormat): string {
	const color = parseColor(input);
	if (!color) {
		throw new Error(`Could not parse color: "${input}"`);
	}
	return formatColor(color, format);
}
