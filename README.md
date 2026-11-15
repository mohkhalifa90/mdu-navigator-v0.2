# MDU Navigator

Unofficial student prototype for **MDU Campus Västerås**. One codebase that runs as an **Android app**, an **iPhone app** and a **web app** (PWA).

- **Two campuses:** Västerås (R Block, T/U Block) and Eskilstuna (A·B·C main building, exam hall on Rademachergatan 7).
- **Schedules for all your courses:** add one KronoX iCal link or `.ics` file per course. They are merged, duplicates removed, each course gets a colour, and links update themselves in the apps. Deadlines (KronoX submissions) are shown separately.
- **Routes:** step by step, across floors and between buildings (U Block floor 2 ↔ R Block floor 3). Every room in both guides is searchable.
- **MDU bus:** next departure between Västerås and Eskilstuna, today's timetable, the stop, and the last bus that gets you to your next session. Knows weekends, Swedish public holidays and semester dates.
- **Opening hours:** shows whether campus is open for students right now.
- **Student tab:** emergency numbers and what to do (violence, fire, bleeding, defibrillators), study tools (Ladok, KronoX, Canvas, library), Helpdesk and Studenttorget, reporting faults in the premises, and campus info (group rooms, kitchens, quiet and rest rooms, lockers, food, parking).
- **Shortcut outside:** between R Block floor 1 and T/U Block floor 1 the route can go outside; tick *Stay indoors* to use the corridors.
- **Languages:** English and Swedish, picked from the phone's language.
- **Privacy:** no account, no server, no tracking. Schedules are stored on the device only.

> Not affiliated with or published by Mälardalen University.

## Project layout

```
www/                 the whole app (plain HTML/CSS/JS, no build step)
  index.html
  css/app.css
  js/app.js          UI, routing (Dijkstra on a corridor graph), iCal parsing
  js/data.js         rooms, corridor graphs, map metadata
  maps/*.png         floor plan images
  sw.js, manifest.webmanifest   offline web app (PWA)
android/             Android Studio project (Capacitor)
ios/                 Xcode project (Capacitor, Swift Package Manager)
resources/           source images for the app icon and splash screen
.github/workflows/   automatic Android APK build and web deploy
```

## Build

Requirements: Node.js 22+. Android also needs Android Studio (JDK 21). iOS needs a Mac with Xcode 16+.

```bash
npm install
npx cap sync          # copies www/ into the native projects
npx cap open android  # Android Studio → Run
npx cap open ios      # Xcode → choose your Team → Run
```

After any change in `www/`, run `npx cap sync` again. When you change files in `www/`, also bump `VERSION` in `www/sw.js` so web users get the update.

### Without installing anything (GitHub)
- **Android APK:** push the repository to GitHub. The *Android APK* workflow builds `app-debug.apk`, which you download from the run's **Artifacts**.
- **Web / iPhone without a Mac:** enable GitHub Pages (Settings → Pages → Source: *GitHub Actions*). The *Web version* workflow publishes `www/`. On iPhone, open the link in Safari → Share → **Add to Home Screen**.

## Logo
The official MDU logo is in `www/img/university-logo.png` and is shown in the header (added at MDU's request). To change it, replace that file; the app picks it up automatically.

## Known limits
- Corridors are simplified, especially in Eskilstuna and T Block. The exam hall and T Block floor 3 are map-only.
- The new building connected to R Block floor 2 isn't in the guides yet.
- Corridors were traced from a schematic PDF without a scale, so distances and walking times are estimates.
- Lift locations aren't marked in the guide, so routes use stairs.
- In the web version, browsers block loading KronoX links directly (CORS). Use file upload there. The Android and iOS apps load links natively.

## Data source
Floor plans: *Lokalguide Västerås* (MDU, August 2026) and *Lokalguide Eskilstuna* (MDU, April 2026), public PDFs on mdu.se. Bus timetable, opening hours and semester dates from mdu.se (autumn 2026).

## KronoX links on the web version
Browsers block the web version from reading KronoX directly, so it goes through a small free Cloudflare Worker (`cloudflare-worker.js`, deployed at https://mdu-kronox.maimoha-hess94.workers.dev/). It only forwards KronoX iCal links from webbschema.mdu.se and stores nothing. The Android/iOS app reads KronoX directly and does not use it. The address is set in `ICS_PROXY` in `www/js/app.js`.
