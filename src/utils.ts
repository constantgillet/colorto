import { FORMAT_LIST } from "./constants.ts";
import type { ColorFormat } from "./types.ts";

const ALL_FORMAT_KEYS = FORMAT_LIST.map((f) => f.key);

export function isValidFormat(value: string): value is ColorFormat {
	return ALL_FORMAT_KEYS.includes(value as ColorFormat);
}
