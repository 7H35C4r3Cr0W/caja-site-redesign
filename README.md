# CAJA Website Redesign — Sample

A modernization sample for **judo-caja.com** (Carolina's American Judo Association, Matthews, NC).
Static, dependency-free HTML/CSS/JS — same stack as the flashcards app, so it can be hosted
anywhere (GitHub Pages included) with zero build steps.

**This is a first-pass sample.** All real club content that could be pulled from the current
site is already in place; everything marked "coming" is a placeholder to fill in with the club.

## Wireframe / information architecture

```
┌──────────────────────────────────────────────────────────┐
│ HEADER (sticky)  CAJA 柔 | Programs Flashcards Game Etiquette │
│                  Instructors About Camp Community | [CTA] │
├──────────────────────────────────────────────────────────┤
│ HERO    headline + "first class free" CTA + quick facts  │
│         floating technique-animation cards               │
├──────────────────────────────────────────────────────────┤
│ PROGRAMS      [ Kids Tue/Thu 6–7p ] [ Adults M–Sa ]      │
├──────────────────────────────────────────────────────────┤
│ FLASHCARDS    copy + app screenshots → live app link     │
├──────────────────────────────────────────────────────────┤
│ GAME          "Ippon Toss" mini-game (shared with the    │
│               flashcards app — js/judo-game.js)          │
├──────────────────────────────────────────────────────────┤
│ ETIQUETTE     6 cards: bow / gi / hygiene / mat /        │
│               sensei & sempai / the path                 │
├──────────────────────────────────────────────────────────┤
│ INSTRUCTORS   team photo + spotlight + head coach        │
│               feature + 14 instructor cards (11 photos)  │
├──────────────────────────────────────────────────────────┤
│ ABOUT         mission + Kanō quote + technique tiles     │
├──────────────────────────────────────────────────────────┤
│ CAMP          Greatest Camp on Earth dark feature card   │
├──────────────────────────────────────────────────────────┤
│ COMMUNITY     sister clubs, judo calendar, Facebook       │
│               pages/group                                 │
├──────────────────────────────────────────────────────────┤
│ VISIT         address / phone / email / camp-scheduling  │
├──────────────────────────────────────────────────────────┤
│ FOOTER                                                   │
└──────────────────────────────────────────────────────────┘
```

Single-page for the sample; each section can later split into its own page
(`/programs`, `/instructors`, …) without changing the design system.

## Content sources

- **Club info, schedules, contact, staff** — judo-caja.com (home + staff pages)
- **Etiquette section** — adapted from judointernationalschool.co.uk/judo-etiquette-guide
- **Camp section** — greatestcamp.com (June 24–26 2027, Javier Guédez headline)
- **Flashcards** — https://7h35c4r3cr0w.github.io/Judo-Throw-Flashcards/ (linked live app,
  screenshots in `images/`)
- **Instructor & team photos** — courtesy of the Judo Caja community (`images/instructors/`, `images/team-photo.jpg`)
- **Community section** — sister clubs, Southeastern Judo Planner, and Facebook links

## To fill in later

- Bios for instructors without one yet (Dana Rucker, Brian Dillman, and the newer roster
  additions have photos now but no bio copy)
- Photos for Sensei Andy, Mike Casper, and Javier Guédez (still initials placeholders)
- Real dojo photography for the hero/about sections
- Belt-testing schedule
- Registration / contact form (currently mailto/tel links)

## Run it

Open `index.html` directly, or `python3 -m http.server` in this folder.
