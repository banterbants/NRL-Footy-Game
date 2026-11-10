# Sixth Tackle (PC)

An arcade 3D rugby league game for PC. Thirteen-a-side under lights, twelve fictional clubs,
a season, a cup and a handful of quick modes. Everything is generated in code: there are no
art, audio or font downloads, so the whole game is two files in `play/`.

## Play it

**In a browser (nothing to install).** Open `play/index.html` in Chrome, Edge or Firefox.
It works straight from disk. Press F11 for fullscreen.

**As a Windows app.** Every push that touches this folder runs the *Build Sixth Tackle for
Windows* workflow on GitHub. Open the repository's **Actions** tab, pick the latest run and
download the `SixthTackle-Windows` artifact. Unzip it and run `Sixth Tackle.exe`.
Windows may show a SmartScreen prompt because the app is unsigned: choose *More info* and
*Run anyway*.

**From source.** With Node 20 or newer:

    npm install
    npm start          # runs the desktop app
    npm run dev        # rebuilds on change and serves http://localhost:8080
    npm run dist       # builds release/Sixth Tackle-win32-x64/Sixth Tackle.exe

## Game modes

| Mode | What it is |
| --- | --- |
| Quick Match | Any two clubs, 13-a-side, six-tackle sets, two halves |
| Premiership | A 5 or 11 round season, top four play finals, saved between sessions |
| Knockout Cup | Eight clubs, three rounds, golden point if level at full time |
| Nines Blitz | Nine a side, five-tackle sets, a try under the posts is worth 5 |
| Golden Point | Sudden death from the kick-off: first score wins |
| Goal Kicking | Ten shots from harder and harder spots with the wind rising |
| Two Player | Head to head on one keyboard, or with gamepads |

Match settings: half length (2, 3, 5 or 8 minutes), Rookie / Pro / Legend difficulty,
day, dusk or night, clear or rain, and an end-on or broadcast side-on camera.

## Controls

Every key can be rebound from **Controls** in the main menu. Defaults:

| Action | Keyboard | Gamepad |
| --- | --- | --- |
| Move | W A S D or arrows | Left stick |
| Sprint | Left Shift | RT |
| Pass left / right (hold for a cut-out pass) | Q / E | LB / RB |
| Sidestep (attack), diving tackle (defence) | Space | A |
| Fend (attack), big hit (defence) | F | B |
| Dummy pass | C | L3 |
| Punt: hold to charge, release to kick | K | X |
| Bomb | I | Y |
| Grubber | L | LT |
| Field goal | J | R3 |
| Switch defender | Q / E | LB / RB |
| Pause | Esc or P | Start |

On attack, the key to press is shown above each support runner. Running into the ball
carrier tackles them; the dive reaches further and the big hit can jar the ball loose but
is easy to miss. Goal kicks are three presses: aim, power, accuracy.

Two players on one keyboard: player 1 uses W A S D, Left Shift, Q/E, Space, F, C and
R/T/G/V for the kicks. Player 2 uses the arrow keys, Right Shift, comma and full stop to
pass, Enter, /, M and K/I/L/J for the kicks.

## Rules it plays by

Six tackles then a handover, 4-point tries, 2-point conversions, 1-point field goals (2 from
beyond 40 metres), 40/20 kicks, 20 metre restarts, goal line drop-outs, kicks out on the
full, knock-ons played as a live loose ball, and golden point in knockout games.
There are no scrums or penalties.

## Project layout

- `src/sim/` - match rules, ball physics, AI (no rendering, runs headless)
- `src/gfx/` - renderer and post-processing, stadium, player models and animation, effects, cameras
- `src/ui/` - HUD and menus
- `src/teams.js`, `src/modes.js` - clubs, kits, crests, season and cup logic
- `play/` - the built game (`npm run build` regenerates `play/game.js`)
- `electron/` - the desktop window

Built with [three.js](https://threejs.org) (MIT) and the Barlow Condensed typeface (OFL).
