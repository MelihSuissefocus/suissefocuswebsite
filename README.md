# Suissefocus Website

This repository contains the source code for the suissefocus website built with [Astro](https://astro.build/) and React components styled via Tailwind CSS.

## Design Decisions & Style Guide

### Typography
- **Font family:** `Inter` with `Poppins` fallback.
- Applied via Google Fonts in `Layout.astro`.

### Colour Palette
| Token | Hex |
|-------|-----|
| `brand-blue` / `swiss-red` | `#5E9BFF` |
| `brand-mint` | `#2FD8A7` |
| `text-dark` / `swiss-navy` | `#2D2D2D` |
| `gradient.start` | `#C9FADB` |
| `gradient.end` | `#99BFFC` |
| `gray.50` | `#F9FAFB` |
| `gray.100` | `#EFF1F5` |
| `gray.200` | `#DCE0E6` |
| `gray.300` | `#C4C8CF` |
| `gray.400` | `#A9AFB7` |
| `gray.500` | `#979CA4` |

### Style Notes
- Header sticks to the top and uses backdrop blur.
- Buttons and highlighted links use `brand-blue` for improved contrast.
- Sections use responsive spacing and semantic headings.
- Gradients follow the mint-to-blue palette for brand recognition.

## Changelog
- Updated Tailwind configuration to use new colour palette and fonts.
- Adjusted navigation, hero, services, products and location sections to the new theme.
- Added Google Font inclusion for `Poppins`.
- Replaced legacy colour names in components.

