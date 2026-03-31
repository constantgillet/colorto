import { select } from "@inquirer/prompts";
import chalk from "chalk";
import { FORMAT_LIST } from "./constants.ts";
import type { ColorFormat } from "./types.ts";

export async function selectFormat(): Promise<ColorFormat> {
	const format = await select({
		message: "Convert to",
		choices: FORMAT_LIST.map((f) => ({
			name: `${f.label.padEnd(6)} ${chalk.dim(f.example)}`,
			value: f.key,
		})),
	});

	return format;
}
