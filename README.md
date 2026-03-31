```
      ██████  ██████  ██  ██████  ██████  ██████  ██████
     ██      ██    ██ ██ ██    ██ ██   ██   ██   ██    ██
     ██      ██    ██ ██ ██    ██ ██████    ██   ██    ██
      ██████  ██████  ██  ██████  ██  ██    ██    ██████
```

# colorto

User and agent friendly CLI to convert colors between formats.

## Agent Skill

Add the color conversion skill to your agent:

```bash
npx skills add https://github.com/constantgillet/colorto --skill convert-color
```

## Installation

```bash
npm install -g @cgillet/colorto
```

## Usage

### Direct conversion

```bash
colorto "#ff6347" --format=oklch
# ██  oklch(0.6962 0.1955 32.32)
```

Short flag:

```bash
colorto "#ff6347" -f rgb
# ██  rgb(255, 99, 71)
```

### Interactive mode

Run without `--format` to pick from a list:

```bash
colorto "#ff6347"
# ? Convert to
# ❯ HEX    #ff6347
#   RGB    rgb(255, 99, 71)
#   HSL    hsl(9, 100%, 64%)
#   HWB    hwb(9 0% 0%)
#   LAB    lab(62% 57 39)
#   LCH    lch(62% 69 34)
#   OKLAB  oklab(0.63 0.16 0.07)
#   OKLCH  oklch(0.63 0.18 29)
```

### Any input format works

```bash
colorto "rgb(255, 99, 71)" -f hex
# ██  #ff6347

colorto "hsl(9, 100%, 64%)" -f oklch
# ██  oklch(0.6962 0.1955 32.32)

colorto "tomato" -f hex
# ██  #ff6347
```

## Supported formats

| Format    | Example                    |
|-----------|----------------------------|
| HEX       | `#ff6347`, `#ff634780`     |
| RGB/RGBA  | `rgb(255, 99, 71)`         |
| HSL/HSLA  | `hsl(9, 100%, 64%)`        |
| HWB       | `hwb(9 0% 0%)`             |
| LAB       | `lab(62% 57 39)`           |
| LCH       | `lch(62% 69 34)`           |
| OKLAB     | `oklab(0.63 0.16 0.07)`    |
| OKLCH     | `oklch(0.63 0.18 29)`      |

## Development

```bash
# Install dependencies
npm install

# Run in dev mode
npx tsx src/cli.ts "#ff6347" -f oklch

# Run tests
npm test

# Lint & format
npm run lint
npm run format

# Build
npm run build
```

## License

MIT
