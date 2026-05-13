# Roofing Site Starter

Generaliserat startpaket för en takläggar-sajt byggd på Next.js (App Router) + Vercel. Baserat på lärdomar från Sands Entreprenad-projektet.

## Hur du använder den

### 1. Fyll i `BRAND-PROFILE.md` först
Den filen är facit för alla `[BRAND]`-, `[DOMAIN]`-, `[PHONE]`-platshållare i de övriga filerna. Gör detta innan något annat — då vet både du och Claude vad alla värden är.

### 2. Skapa två repos
Detta projekt bygger på en uppdelning:

- **Specs-repo** (det här innehållet) — markdown-specifikationer, ingen kod. Behöver inte vara på GitHub.
- **Code-repo** — Next.js-applikationen. På GitHub, auto-deploy till Vercel via push till `main`.

Lägg root-filerna här (`CLAUDE.md`, `STARTPROMPT.md`, `01-*` till `05-*`, `SEO.md`) i specs-repot. Lägg `app-repo-templates/`-filerna i code-repot när du skapar det.

### 3. Klistra in `STARTPROMPT.md` i en ny Claude Code-session
Det är startprompten som drar igång byggandet av sajten. Den refererar till specfilerna (`01-SITEMAP.md` osv).

## Filer

| Fil | Syfte |
|---|---|
| `BRAND-PROFILE.md` | **Fyll i först.** Alla brand-specifika värden. |
| `CLAUDE.md` | Auto-laddas av Claude Code i specs-repot. Pekar på code-repot. |
| `STARTPROMPT.md` | Startprompt för att bygga sajten. |
| `01-SITEMAP.md` | URL-hierarki och sidstruktur. |
| `02-STARTSIDA.md` | Startsidans copy-mall. |
| `03-TJANSTER.md` | Tjänstesidor (template + en per tjänst). |
| `04-FAQ-PRISER-OMRADEN.md` | FAQ, prisguide, områdesmall, om-oss. |
| `05-DESIGN.md` | Designspecifikation (färger, typografi, komponenter, layout). |
| `SEO.md` | **Hjärtat i paketet.** Hela SEO/copy-spelboken. |
| `app-repo-templates/CLAUDE.md` | Auto-laddas i code-repot. Projektregler. |
| `app-repo-templates/AGENTS.md` | Kort Next.js-anteckning. |

## Vad som INTE ingår

Detta paket är medvetet kod-fritt — det är specifikationer + regler, inte en boilerplate-app. Förslag på initial teknisk stack står i `STARTPROMPT.md`. Använd `create-next-app` eller motsvarande för att initiera kodbasen.

## Anpassning till nya kunder

Den största värdebäraren i paketet är `SEO.md`. Den är skriven för takläggar-marknaden i Stockholm men strukturen (synonymkluster, sökintentionshierarki, copy-regler, prestanda-budget) gäller för vilken lokal hantverkstjänst som helst. Anpassa innehållet — behåll strukturen.
