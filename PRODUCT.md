# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) on Vercel, MDX for content, next-intl (pt default, `/en`), Resend + Cloudflare Turnstile for the contact form, Cal.com embed, Vercel Analytics. No database, no CMS, no auth, no AI calls on the site. Replaces the static HTML/CSS currently in this repo. Full decision record: `docs/spec.md`.

## Users

- **Primary:** founders and product leads at startups and SaaS companies who want AI features inside their product (chat, voice, RAG, workflow automation) and need someone who can ship it to production, not prototype it.
- **Secondary:** owners of small and mid-sized businesses (PMEs) who want an AI agent on WhatsApp for support, qualification and sales.
- Both arrive deciding whether to hand a real project to one senior engineer. They evaluate competence and trust, then make contact.

## Product Purpose

The personal services site of Douglas de Oliveira, a solo software engineer with 15 years of experience, currently at Mercado Livre. It sells three services and converts visitors into qualified contacts. Success means a qualified lead fills the short form (with a budget range) and books a call.

Services:
1. **IA dentro do seu produto** (headline offer)
2. **Agente de IA no WhatsApp**
3. **MVP com IA do zero**

No prices on the site.

## Positioning

Engineering for production, not prompts. Fifteen years building systems that cannot go down (logistics at Mercado Livre; delivery and enterprise work through CI&T), now applied to putting AI into products and keeping it running. A personal brand: one named person, first person singular, glad to take on new projects.

## Operating Context

- Visitors read the home page, open a case study (Spindow, Luvi), then use the contact form. The calendar appears only for leads whose budget range qualifies; others get an email reply.
- Portuguese first; English mirror at `/en` with USD context and human-reviewed copy.

## Capabilities and Constraints

- Home, `/cases/spindow`, `/cases/luvi`, `/notas` (2–3 MDX essays at launch, no prominent dates), `/privacidade` (LGPD), `/en` mirror.
- Mercado Livre is named as current employer only; never imply it is a client or endorses the work. Avoid direct competitors of Mercado Livre as clients.
- Workplaces are named only (Mercado Livre, CI&T), with no projects, clients or details.
- Luvi (formerly AutoPost IA) is offline: described as "own project, closed after its validation cycle; its architecture became the base of the WhatsApp agents I build today". Never mention lack of demand or revenue figures.
- No live AI demo on the site (explicitly removed). No product videos; architecture diagrams instead.
- Open: confirmation that the Mercado Livre contract allows outside work; client testimonials and logos; Cal.com hours; email routing.

## Brand Commitments

- Name: Douglas de Oliveira. Domain: `douglasoliveira.dev.br`. Contact: `contato@douglasoliveira.dev.br`.
- Voice: first person, direct, short sentences, verifiable claims. Banned: "revolucione", "potencialize", "o futuro é agora" and similar hype.
- Hero line: **"Coloco IA dentro do seu produto. E ela funciona em produção."**
- Social: GitHub and LinkedIn only.

## Evidence on Hand

- Employment: Mercado Livre (current) and CI&T. Shown as names only.
- **Spindow** (main case, live at spindow.com.br, no public numbers): English for people with dyslexia; conversational tutor (GPT-4o), lesson generation, grammar validation, translation, TTS, Whisper transcription for pronunciation; subscriptions with card and Pix Automático, teacher matching, Google Calendar scheduling. Repo: `~/Developer/spindow/spindow`.
- **Luvi / AutoPost IA** (offline): Instagram strategist on WhatsApp with Claude; free profile analysis, in-chat checkout, 24h-window re-engagement cadence, opt-out detection, idempotent 7-day refund, queue workers. Repo: `~/Developer/autopost-ia`.
- **Zammer Sorvetes** (zammer.com.br): site plus internal system for factory stock and store/franchise orders.
- **09 Iluminação** (internal): quotes, orders, catalog, stock with reservations and low-stock alerts.
- **K-hui** (khui.com.br): site plus gym management with credits and tokens.
- **Pomelo** (pomelofiles.app, App Store): native iPhone/iPad/Mac file converter from the Share menu, on-device processing.
- Screenshots of the live products: `docs/propostas/img/`. Portrait: `assets/profile.jpg`.
- **Absent, never fabricate:** testimonials (requested, not yet received), client logos, usage or revenue metrics, Spindow numbers.

## Product Principles

1. Show the work before the offer: proof precedes the service list.
2. Every claim is verifiable: a live product, a named employer, a real architecture.
3. Invite, don't gatekeep: the contact is warm and short.
4. Reference the work, don't over-explain it: one line and a link per project.
5. Say less, mean it: no hype vocabulary, no invented numbers.

## Accessibility & Inclusion

WCAG 2.2 AA: contrast, full keyboard use, screen-reader semantics, reduced-motion fallbacks. The main case is accessibility for people with dyslexia, so the site's own reading experience should hold up to that standard.
