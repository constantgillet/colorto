import chalk from "chalk";
import { converter } from "culori";
import type { Color } from "culori";

export function printResult(color: Color, result: string): void {
	const rgb = converter("rgb")(color);
	const r = Math.round((rgb.r ?? 0) * 255);
	const g = Math.round((rgb.g ?? 0) * 255);
	const b = Math.round((rgb.b ?? 0) * 255);

	const swatch = chalk.rgb(r, g, b)("██");
	console.log(`\n  ${swatch}  ${chalk.bold(result)}\n`);
}
