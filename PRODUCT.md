# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Business owners arriving from Roman's Instagram (@roman.peschke). The Reels cover AI for business: Claude Code features explained for non-developers, running Meta ads with Claude Code, connecting a CRM (GoHighLevel) to Claude Code, and useful new AI tools. The audience is not exclusively technical; the working assumption is that anyone can do this now, so guides must work for a non-developer following along on their own machine. A secondary group of developers and Claude Code power users reads the same guides, but the paying customer is the business owner, typically one running ads or an agency.

How they arrive: every Reel ends with "comment <keyword> and I'll send it over". The visitor commented, received the guide link by DM, and lands directly on that guide page on their phone. They already asked for this specific guide. There is no bio link and no other path to the site by design; the homepage is only reached by someone who searches for it on purpose.

## Product Purpose

The guide pages are lead magnets. Each one is the written, step-by-step version of one Reel: exact tools, exact steps, exact links, pumped with as much value as the topic allows. Roman's goal is to ship as many unique lead magnets as possible; guides are made to fulfil Reels. This is not an organic search or website-growth play. Success is a visitor who commented on a Reel, lands on the guide, completes the workflow, and joins the Skool community.

## Positioning

Every guide is tied to a specific video Roman actually made and a workflow he actually runs in his own agency. The site is not a tool directory or a blog; it is a set of fulfilment pages for Reel promises, from one operator's own playbook. Roman's mechanism is applying Claude Code and related AI tools to running and marketing a business (ads, CRM, creative at scale, automations), not software engineering for its own sake.

## Operating Context

- Traffic source: Instagram Reel comment keyword, then a DM with the guide link. YouTube is linked from the site but is not a meaningful source. Roman is resuming daily Reels now after a pause since late May 2026; the redesign is being done before the next batch ships.
- Reading scene: on a phone, mid-task, straight from a DM, often with the tool open on a laptop at the same time.
- Reel themes, in order of volume: (1) Claude Code news and features translated for business owners; (2) Meta ads with Claude Code: compliance, creative at scale, autopilot management, the category with the largest Reels; (3) GoHighLevel CRM connected to Claude Code; (4) standalone tool finds.
- Every Reel keyword to date (Meta, OPUS, business, video, TOKENS, codex, studio, data, Luma, iMessage, desktop, coffee, Code, Claude, superpowers) has a matching guide.
- 16 guides live under `guides/<slug>/index.html`; the homepage lists them. A new guide is added each time a Reel with a keyword ships, so the guide template must be fast to duplicate and fill.
- Site is static HTML deployed on Vercel from the `main` branch of `github.com/romanpeschke/romanpeschke-site`. No build step. `llms.txt` and `sitemap.xml` are maintained by hand alongside the guides.

## Capabilities and Constraints

- The offer: the Skool community "AI Ads with Roman" at https://www.skool.com/ai-ads-with-roman/about. It is the single conversion goal and should be reachable from every guide, not only the four that currently carry it.
- Offer copy (set by Roman 2026-09-05, use verbatim, top block and footer alike): title "Join AI Ads w/ Roman"; body "The exact AI automations, agents, and strategies my team and I use to scale Meta ads (Facebook ads), content, and sales for $1m+ businesses"; buttons "Learn more" (top) and "See the community" (footer). No price, no member count, no future price on the site. The "$1m+ businesses" line is Roman's own claim, used only as he wrote it.
- The guide is the fulfilment of a promise made in a Reel. It must deliver fully and be usable without joining; if it reads as a bait-and-switch the DM funnel breaks. Free value first, offer second.
- Everything must be easy and simple to understand. Prerequisites ("what you need") come first so the reader can check macOS, Pro/Max plan, Bun, etc. before starting. Steps are numbered, commands are copyable.
- The guide template is the primary surface. The homepage is low priority: a simple index for the rare deliberate visitor.
- Homepage guide list is chronological, newest first. Grouping by theme was considered and rejected as likely to get messy.

## Brand Commitments

- Name: Roman Peschke, personal brand. Domain romanpeschke.com. Instagram handle @roman.peschke.
- Voice as evidenced in Reels and site copy: direct, first-person, conversational, specific, slightly provocative ("without getting banned", "stop burning tokens", "steal my automations"). Honest about what doesn't work. Explicitly anti-scam and anti-hype; states "I'm not affiliated" when recommending tools. Numbers and concrete steps over adjectives. No corporate tone.
- Do not use Roman's Reel sign-off ("follow for more AI business education") anywhere on the site. It belongs to the videos only.
- Existing links that must persist: Instagram https://instagram.com/roman.peschke, YouTube https://youtube.com/channel/UCKCFX_RcAJwNK7bqZd069iQ, Skool (above).
- No logo or brand asset files exist in the repo. The wordmark is the name set in type.

## Evidence on Hand

- 16 real guides with real, tested steps: the guides themselves are the proof of expertise.
- Reel captions and transcripts for all 59 Reels to date, with view counts, at `/Users/RomanPeschke/instagram-automation/exports/roman-reels-captions-transcripts.md` (outside this repo). Useful for matching guide headlines to the hooks that already worked.
- Roman's own claims as stated in his Reels and CTA copy (self-reported, no third-party proof; use only as he already uses them, never dressed up as case studies): runs his own agency on Claude Code and Nano Banana 2; $3.97 cost per lead on his own campaigns; cost per lead cut in half for himself and clients; batches of 20 to 60 creatives per prompt; "1-200+ ads/week"; Claude Code connected to Ads Manager, GoHighLevel, Pinecone, and Telegram.
- Roman confirmed there is no other proof yet. Absent, do not fabricate: follower or view counts on the site, member testimonials, client names or results, case studies, press, tool logos as endorsements, member counts, or any number not already in his own copy.

## Product Principles

1. The guide must work. A visitor who follows it step by step gets the result. Everything else is secondary.
2. Mobile is paramount. The reader is on a phone, came from a DM, and asked for this exact guide. Design and test phone-first; desktop is the afterthought.
3. Easy and simple to understand, always. Prerequisites first, numbered steps, copyable commands, no jargon without a one-line explanation.
4. One offer on every guide, never in the way. Skool is present but never blocks reading or makes the free guide feel withheld.
5. Every guide is a lead magnet, normally tied to one Reel. Pump it with value; don't pad it.

## Accessibility & Inclusion

No specific standard was set. Mobile-first reading is a hard requirement: tap targets, copyable commands, and readable code blocks on a phone matter more than anything on desktop.
