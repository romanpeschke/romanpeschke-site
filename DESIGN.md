---
name: romanpeschke.com guides
description: Monochrome guide pages with a dark opening band; one indigo accent used only as a pointer.
colors:
  band: "#111"
  band-ink: "#fff"
  band-mute: "#b3b3b3"
  band-line: "#2a2a2a"
  band-card: "#1c1c1c"
  chip-line: "#333"
  page: "#fafafa"
  card: "#fff"
  ink: "#111"
  body: "#222"
  mute: "#5f5f5f"
  line: "#e4e4e4"
  code: "#ededed"
  pointer: "#5457e3"
  pointer-soft: "#e0e7ff"
  pointer-ink: "#c7d2fe"
typography:
  display:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(36px, 9.2vw, 72px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(24px, 4.6vw, 30px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.022em"
  headline-phase:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(22px, 4.2vw, 26px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.012em"
  subhead:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  lede:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body-small:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  meta:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.88em"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "normal"
rounded:
  code: "5px"
  control: "8px"
  inset: "10px"
  card: "12px"
  pill: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "22px"
  gutter: "22px"
  step: "18px"
  section: "44px"
  section-wide: "56px"
  measure: "680px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "44px"
    typography: "{typography.body-small}"
  button-primary-hover:
    backgroundColor: "{colors.pointer}"
    textColor: "{colors.card}"
  button-on-band:
    backgroundColor: "{colors.band-ink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "44px"
  button-on-band-hover:
    backgroundColor: "{colors.pointer-ink}"
    textColor: "{colors.ink}"
  tool-chip:
    backgroundColor: "{colors.band-card}"
    textColor: "{colors.band-ink}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
    height: "40px"
    typography: "{typography.label}"
  offer-panel:
    backgroundColor: "#f0f0f0"
    textColor: "{colors.body}"
    rounded: "{rounded.card}"
    padding: "22px"
  option-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.body}"
    rounded: "{rounded.card}"
    padding: "16px"
  inset-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.body}"
    rounded: "{rounded.inset}"
    padding: "12px 14px"
  note:
    backgroundColor: "{colors.card}"
    textColor: "{colors.mute}"
    rounded: "{rounded.inset}"
    padding: "12px 14px"
    typography: "{typography.label}"
  callout:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    rounded: "{rounded.card}"
    padding: "18px"
  step-numeral:
    backgroundColor: "{colors.pointer}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
    size: "30px"
  tip-numeral:
    textColor: "{colors.pointer}"
    typography: "{typography.mono}"
  inline-code:
    backgroundColor: "{colors.code}"
    textColor: "{colors.ink}"
    rounded: "{rounded.code}"
    padding: "2px 6px"
    typography: "{typography.mono}"
---

# Design System: romanpeschke.com guides

## Overview

**Creative North Star: "The Dark Band, Then the Work"**

Every page opens in a near-black band that holds the promise (name, handle, title, subtitle, tool chips) and then drops onto a near-white reading ground where the actual work happens: numbered steps, comparisons, commands. The memorable moment is the edge where black turns white as you scroll. Nothing else on the page tries to be memorable; the band has already done that job.

The world is monochrome by discipline. Ink, body, mute, and hairline are four steps of the same neutral, and every surface is either the page tint or plain white with a hairline border. One indigo exists, and it is never a fill for anything larger than a 30px numeral: it marks step numbers, tip numbers, focus rings, warning glyphs, and the offer note. It tells the reader where to look; it never decorates. Comparisons are told apart by weight and border darkness, not by red and green.

Density is phone-first reading density: a 680px measure, 17px body at 1.55, sections 44px apart, one column until 720px. The Skool offer is a #f0f0f0 panel (12px radius, 22px padding) that straddles the band's bottom edge, pulled 72px up into the dark, and repeats as text in the centered footer; it never interrupts a step sequence.

**Key Characteristics:**
- Near-black opening band over a near-white reading ground; the switch is the signature.
- Four-step neutral ramp, one indigo pointer; no status hues.
- Figtree at three weights (400, 600, 700), JetBrains Mono for pasted values only.
- White cards with 1px hairline borders; no surface on the page is shadowed.
- Tight negative tracking on all headings, tabular numerals on every number.
- One offer, top and bottom, never between steps.

## Colors

A single neutral family stepped from #111 to #fafafa, with one indigo reserved for pointers.

### Primary
- **Pointer Indigo** (#5457e3): the only chroma on the page. Used as the fill of the 30px step numeral, the color of the mono tip number, the 2px focus outline, the stroke of warning glyphs, and the hover color of links, buttons, and index titles. Never a background larger than a numeral, never a border on a card.
- **Pointer Wash** (#e0e7ff): text selection background on the light ground only.
- **Pointer Ink** (#c7d2fe): hover fill for the white button when it sits inside the band.

### Neutral
- **Band** (#111): the opening band background. Same value as Ink; the band is literally the ink turned into a surface. Also the callout background and the primary button fill.
- **Band Ink** (#fff): all text inside the band, and text on the callout and primary button.
- **Band Mute** (#b3b3b3): hero subtitle and the Instagram handle in the top bar.
- **Band Line** (#2a2a2a): the single hairline under the top bar.
- **Band Card** (#1c1c1c) with **Chip Line** (#333): tool chip fill and border inside the band. #333 also backs inline code inside the dark callout.
- **Page** (#fafafa): the reading ground.
- **Card** (#fff): every card and inset surface.
- **Ink** (#111): headings, strong text, link text, inline code text, the emphasized "after" border.
- **Body** (#222): running text.
- **Mute** (#5f5f5f): section subtitles, offer description, FAQ answers, notes, footer, dates, "before" comparison text.
- **Line** (#e4e4e4): every hairline: card borders, step dividers, FAQ dividers, index dividers, phase underline, footer top.
- **Code** (#ededed): inline code background.

### Named Rules
**The Pointer Rule.** Indigo appears only where the reader needs to be pointed at something: numerals, focus, glyph strokes, the copy underline, the progress line. Never on the primary button (which hovers to #333) and never as a sheen or fill. If a proposed use is wider than 30px or is a fill behind text, it is not a pointer and it is not allowed.

**The No Status Hue Rule.** Nothing is red, green, amber, or blue to mean bad, good, warning, or info. Warnings use an indigo X glyph; comparisons use mute text for before and an ink border for after.

**The Band Is Ink Rule.** The dark band, the callout, and the primary button share one value (#111). Dark surfaces are the ink made solid, not a second palette.

## Typography

**Display Font:** Figtree (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Figtree (same family; loaded at 400, 600, 700 from Google Fonts)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo; loaded at 500)

**Character:** One humanist sans at three weights does everything; hierarchy comes from size, weight, and negative tracking, never from a second face. Mono is functional, not decorative: it marks the exact thing to paste, and the tip numbers.

### Hierarchy
- **Display** (700, clamp(36px, 9.2vw, 72px), 0.98, -0.036em): the hero title inside the band. One per page.
- **Headline** (700, clamp(24px, 4.6vw, 30px), 1.15, -0.022em): section headings on the reading ground. Followed by an optional one-line Mute subtitle with 6px between them.
- **Headline, phase** (700, clamp(22px, 4.2vw, 26px), -0.02em): grouping headers in tip guides, with a hairline underline 10px below.
- **Title** (700, 19px, -0.012em): step headings, option titles, tip titles, callout heading. The offer title is the same role at 21px and -0.015em; the index title at 18px.
- **Subhead** (600, 15px to 16px): h4 inside do-lists, compare cards, and example cards. Also the FAQ question at 700, 16px.
- **Lede** (400, 18px, 1.55, max 62ch): the intro block; the hero subtitle uses the same size in Band Mute (19px at 900px and up, max 56ch).
- **Body** (400, 17px, 1.55): running text; the container fixes the measure at 680px minus 22px gutters.
- **Body small** (400, 15px, 1.5): text inside option, compare, example, and warning items; FAQ answers; offer description; footer line.
- **Label** (600, 14px): tool chips, top bar links, button text at 15px, option bullet text at 400.
- **Meta** (13px): dates in the index, footer meta, offer note (600, Ink), tip numeral (mono, Ink).
- **Mono** (500, 0.88em): inline code with a Code background, 2px 6px padding, 5px radius.

### Named Rules
**The Tight Heading Rule.** Every heading carries negative tracking, tightening as it grows: -0.012em at 19px up to -0.036em at 72px. Body text is never tracked.

**The Reachable Pointer Rule.** Any tappable pointer keeps a 44px hit area even when it draws smaller: the 30px numeral and the inline copy buttons extend an invisible ::before, and top bar links stand 40px tall.

**The Tabular Numbers Rule.** Step numerals, tip numbers, and dates set `font-variant-numeric: tabular-nums` so numbered lists align.

**The No Eyebrow Rule.** No small-caps, uppercase, or letterspaced label sits above a heading. Section context goes in a Mute subtitle below the heading, never in a kicker above it.

## Layout

Single centered column, 680px max-width, 22px side gutters, on every page and at every width. The band spans full width; its content (top bar, hero) uses the same container as the reading ground, so title and steps share a left edge. The band is the peak of the page: 52/62px of vertical padding on phones and 96/84px from 900px, the display title capped at 14ch, and the offer panel straddles the band edge (band padding-bottom 110/120px, panel margin-top -72px), rising in 0.26s after the hero. A two-layer white sheen (blurred glow plus a hairline highlight, rotated 18°) sweeps across it over about 2.8s, rests 4s, and repeats; hover does not alter it. Off under reduced motion.

Vertical rhythm on phones: top bar 16px padding with a Band Line hairline beneath; hero 38px top, 34px bottom; main 26px top, 70px bottom; sections 44px apart; steps 18px vertical padding with hairline dividers; phases 36px apart; footer 28px top, 40px bottom. At 900px and up the band and main open up (hero 64px/48px, main 40px/100px, sections 56px) while the column stays 680px.

Grids: option cards stack, then become three equal columns at 720px with 12px gaps. Compare pairs stack, then two equal columns at 560px with 10px gaps. Index rows stack, then a 96px date column plus title at 640px with an 18px gap. Steps are a fixed 36px numeral column plus text with a 14px gap at every width. Warnings are a 22px glyph column plus text with a 10px gap.

Tap targets: buttons are 44px minimum height, chips 40px, index rows 16px vertical padding.

## Elevation & Depth

The system is flat. Depth is carried by tone (band over page, white card over #fafafa) and by 1px hairlines in Line. One exception exists: the offer card carries a soft downward shadow at rest and lifts 2px with a deeper shadow on hover, because it is the one clickable card and must read as a button-sized object.

### Shadow Vocabulary
- **Offer rest** (`box-shadow: 0 8px 24px -16px rgba(0,0,0,.35)`): the Skool offer card only.
- **Offer hover** (`box-shadow: 0 14px 32px -16px rgba(0,0,0,.35)` with `transform: translateY(-2px)`): the same card on hover.

### Named Rules
**The No Shadow Rule.** Nothing is shadowed. The offer is a flat gray panel; option cards, compare cards, example cards, notes, and the callout are flat with a hairline or a solid ink fill. Emphasis inside a comparison is a darker border (Ink), never a shadow.

## Shapes

Soft-cornered rectangles at four radii, scaled to the object: 5px on inline code, 8px on controls (buttons, tool chips), 10px on inset blocks that live inside a step or tip (compare, example, note), 12px on standalone cards (offer, option, callout). The step numeral is a 30px circle. Focus rings take a 4px radius at 3px offset. Borders are always 1px: Line on the light ground, Band Line or Chip Line in the band. There is no clipping, no diagonal, no pill button.

## Components

### Buttons
- **Shape:** softly rounded (8px), 44px minimum height, 11px 18px padding, inline-flex centered.
- **Primary:** Ink fill with white text, 600 weight at 15px. Used for "Join for $9/mo" in the offer card and footer.
- **Hover / Focus:** fill shifts to Ink over 0.18s; focus is the global 2px indigo outline at 3px offset.
- **On band:** inverts to white fill with Ink text; hover fill becomes Pointer Ink (#c7d2fe).

### Tool Chips
- **Style:** Band Card fill, 1px Chip Line border, 8px radius, 8px 12px padding, 40px minimum height, 600 weight at 14px, white text, no underline. Laid out in a wrapping 8px-gap row under the hero subtitle.
- **State:** border brightens to white on hover over 0.18s. Chips are links to the tool, not filters.

### Cards / Containers
- **Corner Style:** 12px for offer, option, and callout; 10px for compare, example, and note.
- **Background:** Card white on the Page ground; the callout is Ink with white text and #333 code chips.
- **Shadow Strategy:** offer card only (see Elevation). Everything else flat.
- **Border:** 1px Line on all light cards. The compare "after" card swaps its border to Ink.
- **Internal Padding:** 20px offer, 16px option, 18px callout, 12px 14px for inset blocks.

### Offer Card (signature)
A single anchor wrapping title (21px/700), Mute description (15px), then a row of the primary button and a 13px Ink note ("Founding rate · 10 spots") with a 12px gap. Sits first under the band on every page with 32px below it. Its copy is fixed product copy and is not restyled or reworded per page.

### Steps (signature)
Ordered list without markers. Each step is a two-column grid: a 30px Ink circle with a white 700-weight tabular numeral, then a 19px title and 17px body. Steps are separated by Line hairlines with 18px padding; the first step has no top rule. Pasted values are inline code. The numeral is a button: tapping it marks the step done (Ink fill, a drawn white check, Mute title) and the count appears under the section subtitle as a 14px Ink line ("2 of 5 done", then "All 5 done. You are in."). State persists per guide in localStorage.

### Copyable values
Any `code.copy` (URLs, slash commands, snippets over 40 characters) is wrapped in an unstyled button at runtime by /assets/guide.js. It shows a 1px dotted Ink underline at rest, a Selection Wash background on hover and after copy, and a 13px 600 Ink "Copied" word beside it for 1.6s. Inside the ink callout the underline and word use the band accent tint and the hover fill is #333.

### Tips and Phases (signature)
Phase headers are 22px to 26px with a hairline underline. Each tip opens with a baseline-aligned head: a mono Ink "#n" at 13px beside a 20px title. Below it, running text, then an unboxed do-list (600 h4 "What to do", 16px bullets), then either a compare pair or an example card.

### Compare Pair
Two inset cards, 10px radius, 14px text. "Before" text is Mute inside a Line border; "after" text is Body inside an Ink border. No color change, no icons.

### Warnings
Unmarked list; each item is a 22px column holding an 18px inline SVG X (Ink stroke, 2.5 width, round caps) beside 15px text with a bold lead sentence.

### Note
Inset card in Mute 14px text with a bold lead, 18px above; used once per section at most, after a step list.

### Callout
Ink-filled 12px card with white 19px heading and white body; inline code gets a #333 background. Closes a section with the shortest possible restatement of the steps.

### FAQ
Unmarked list with Line dividers, 14px vertical padding; 16px/700 question, 15px Mute answer. No accordion.

### Navigation
The top bar is the only navigation: the name as a 14px/600 white link on the left, the Instagram handle in Band Mute on the right (white on hover), separated from the hero by a Band Line hairline. The footer repeats the domain and YouTube in 13px Mute, spread to both edges. No menu, no mobile drawer.

### Index Rows (homepage)
Line-divided rows, 16px padding; a 13px Mute tabular date, then an 18px/700 Ink title and a 14px Mute tool list. Whole row is the link; title turns Ink on hover over 0.15s.

### Motion
Hero children rise 10px and fade in over 0.7s on `cubic-bezier(.16,1,.3,1)`, staggered 0.08s (subtitle) and 0.16s (chips), only under `prefers-reduced-motion: no-preference`. Offer hover transitions over 0.2s on `cubic-bezier(.2,.8,.2,1)`. Color and border hovers run 0.15s to 0.18s. Smooth scroll is disabled under reduced motion. Feedback motion: the step check draws in over 0.3s (stroke-dashoffset) with a 0.05s delay while the numeral fades in 0.12s and the button scales to 1.14 and back over 0.3s; the "Copied" word rises 3px over 0.25s. All on `cubic-bezier(.16,1,.3,1)`, all skipped under reduced motion.

## Do's and Don'ts

### Do:
- **Do** open every page with the band (top bar, title, subtitle, chips) and return to #fafafa for everything that must be read.
- **Do** use Ink (#111) only for step numerals, tip numbers, focus outlines, warning glyph strokes, the offer note, and hover color.
- **Do** distinguish before/after by Mute text versus an Ink border; keep both cards white.
- **Do** keep do-lists unboxed; reserve cards for option cards, compare pairs, example blocks, notes, and the callout.
- **Do** set every heading in Figtree 700 with negative tracking, and every number in tabular numerals.
- **Do** place the offer card first under the band and the footer CTA last, with the fixed Skool copy unchanged.
- **Do** hold the 680px measure and 22px gutters at every width; widen vertical spacing at 900px, never the column.

### Don't:
- **Don't** put an eyebrow, kicker, or uppercase label above any heading.
- **Don't** use red, green, amber, or blue as status colors, and don't add a second accent.
- **Don't** fill any surface larger than the 30px step numeral with indigo, or use indigo as a card border.
- **Don't** add shadows to anything but the offer card; don't use hard offset shadows anywhere.
- **Don't** use emoji, icon fonts, or image icons; the only icon is the inline SVG warning X.
- **Don't** insert the offer between steps or tips; it lives above and below the work only.
- **Don't** add per-page inline styles or a second stylesheet; every rule lives in /assets/guide.css.
- **Don't** use the Reel sign-off ("follow for more AI business education") anywhere on the site.
