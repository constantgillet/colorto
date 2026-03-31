#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import { FORMAT_LIST } from "./constants.ts";
import { convertColor, parseColor } from "./convert.ts";
import { selectFormat } from "./interactive.ts";
import { printResult } from "./output.ts";
import type { ColorFormat } from "./types.ts";
import { isValidFormat } from "./utils.ts";

program
	.name("colorto")
	.description("Convert colors between formats")
	.version("0.1.0")
	.argument("<color>", 'Color value to convert (e.g. "#ff6347", "rgb(255, 99, 71)")')
	.option("-f, --format <format>", `Output format (${FORMAT_LIST.map((f) => f.key).join(", ")})`)
	.action(async (colorInput: string, options: { format?: string }) => {
		const color = parseColor(colorInput);
		if (!color) {
			console.error(chalk.red(`\n  Error: Could not parse color "${colorInput}"\n`));
			process.exit(1);
		}

		let format: string;

		if (options.format) {
			if (!isValidFormat(options.format)) {
				console.error(
					chalk.red(
						`\n  Error: Unknown format "${options.format}". Valid formats: ${FORMAT_LIST.map((f) => f.key).join(", ")}\n`,
					),
				);
				process.exit(1);
			}
			format = options.format;
		} else {
			format = await selectFormat();
		}

		const result = convertColor(colorInput, format as ColorFormat);
		printResult(color, result);
	});

program.parse();
