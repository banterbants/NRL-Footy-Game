# Sixth Tackle

A simple 3D rugby league inspired game for iPhone and iPad, built with three.js and wrapped
for iOS with Capacitor. Everything the game needs is in `www/` and works offline.

You play the Kookaburras against the CPU Ironbarks: 7-a-side, two 2:30 halves, six tackles
per set, 4-point tries, 2-point conversions, kicks, handovers and 20 metre restarts.

## Controls

| Control | In attack | In defence |
| --- | --- | --- |
| Left thumb stick (arrows / WASD) | Run | Run |
| Gold button (Space) | Pass, toward the side you lean | Diving tackle |
| Second button (K) | Kick downfield | Switch player |
| Step (L) | Sidestep through a tackle | - |
| Sprint (Shift) | Hold to sprint while stamina lasts | same |

Running into the ball carrier also tackles them. After a try, tap when the pin is in the
gold zone to kick the conversion (the zone is narrower the wider out you scored).

## Put it on an iPhone

### Option A - Xcode (a real app; needs a Mac)

1. Install Xcode, Node 20+ and CocoaPods (`sudo gem install cocoapods`).
2. In this folder:

       npm install
       npx cap sync ios
       npx cap open ios

3. In Xcode select the **App** target, open *Signing & Capabilities*, pick your Team (a free
   Apple ID works) and change the bundle identifier if Xcode asks for a unique one.
4. Plug in the iPhone, choose it as the run destination and press Run.

The Xcode project in `ios/` is already set to landscape, full screen, with the app icon.
A free Apple ID installs last 7 days; App Store or TestFlight needs the paid developer program.

### Option B - Home Screen web app (no Mac)

Host the `www/` folder on any static HTTPS host (GitHub Pages, Netlify, ...), open it in
Safari on the iPhone, then Share > Add to Home Screen. It launches full screen like an app.

## Try it on a computer

    npm run serve

then open http://localhost:8080. It must be served over http(s); opening `index.html`
straight from disk will not load the game script.

## Files

- `www/game.js` - all game logic and rendering
- `www/game.css` - scoreboard, touch controls, menus
- `www/three.module.min.js` - three.js r160 (MIT), bundled so the app runs offline
- `ios/` - Capacitor-generated Xcode project
