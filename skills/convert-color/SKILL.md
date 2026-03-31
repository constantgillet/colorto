---
name: convert-color
description: Converts colors between formats (HEX, RGB, HSL, HWB, LAB, LCH, OKLAB, OKLCH) using the colorto CLI. Use this skill when the user asks to convert a color, needs a color in a different format, or is working with color values.
---

# Convert Color

Convert colors between any supported format using the `colorto` CLI.

## When to Use This Skill

Use this skill when the user:

- Asks to convert a color to a different format (e.g., "convert #ff6347 to rgb")
- Needs a color value in a specific format for their code
- Asks "what is this color in HSL/RGB/HEX/etc."
- Is working with CSS or design tokens and needs format conversions
- Wants to see a color in multiple formats

## Supported Formats

| Format | Example                  |
|--------|--------------------------|
| HEX    | `#ff6347`, `#ff634780`   |
| RGB    | `rgb(255, 99, 71)`       |
| HSL    | `hsl(9, 100%, 64%)`     |
| HWB    | `hwb(9 0% 0%)`          |
| LAB    | `lab(62% 57 39)`        |
| LCH    | `lch(62% 69 34)`        |
| OKLAB  | `oklab(0.63 0.16 0.07)` |
| OKLCH  | `oklch(0.63 0.18 29)`   |

## How to Convert Colors

Run the `colorto` CLI with the color value and desired output format:

```bash
npx @cgillet/colorto "<color>" --format <format>
```

### Examples

```bash
# HEX to RGB
npx @cgillet/colorto "#ff6347" --format rgb

# RGB to HSL
npx @cgillet/colorto "rgb(255, 99, 71)" --format hsl

# HSL to OKLCH
npx @cgillet/colorto "hsl(9, 100%, 64%)" --format oklch

# Named color to HEX
npx @cgillet/colorto "tomato" --format hex
```

### Short Flag

Use `-f` as shorthand for `--format`:

```bash
npx @cgillet/colorto "#ff6347" -f rgb
```

## Tips

1. **Always quote the color value** to prevent shell interpretation (especially for `#` in HEX values)
2. **Named CSS colors work** as input (e.g., `tomato`, `steelblue`, `coral`)
3. **Any input format is accepted** — colorto auto-detects the input format
4. If no `--format` is specified, colorto launches an interactive picker
