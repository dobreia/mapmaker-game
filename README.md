# Mapmaker Game

🌐 Live demo: https://dobreia.github.io/mapmaker-game/index.html

---

## 🇭🇺 Magyar / 🇬🇧 English

- [🇭🇺 Magyar leírás](#-magyar-leírás)
- [🇬🇧 English documentation](#-english-documentation)

---

# 🇭🇺 Magyar leírás

## 🎮 Áttekintés

A Mapmaker Game egy egyszemélyes, stratégiai jellegű tile placement játék, amely JavaScript-ben készült.

A játék során egy 11x11-es rácsos térképre kell különböző alakzatú terepelemeket elhelyezni, miközben idő és küldetések alapján pontokat gyűjtünk.

---

## 🚀 Játékmenet

- A játék egy 11x11-es térképen zajlik
- Véletlenszerűen kapott elemeket kell elhelyezni a térképre kattintva (erdő, víz, város, farm)
- Minden elem időegységbe kerül
- A játék összesen 28 időegységig tart
- Az elemek:
  - forgathatók
  - tükrözhetők
- A játék 4 évszakra van bontva (tavasz, nyár, ősz, tél)

---

## 🧠 Pontozás és logika

- Küldetések alapján történik a pontszámítás
- Minden évszakban más küldetések aktívak
- A végső pontszám az összes szezon eredménye
- Extra pontok szerezhetők speciális feltételekkel (pl. hegyek körbezárása)

---

## 🎯 Fő funkciók

- Grid alapú játéktér generálása
- Dinamikus elem elhelyezés
- Rotáció és tükrözés
- Idő alapú játékmenet
- Szezon alapú scoring rendszer
- Többféle küldetés (basic + extra)
- Valós idejű pontszám frissítés

---

## 🛠 Technológiák

- JavaScript (vanilla)
- HTML
- CSS
- Bootstrap (layout)

---

## 📁 Projekt struktúra

- `index.html` – UI és játéktér  
- `script.js` – teljes játékmenet logika  
- `style.css` – megjelenés  

assets:
- terrain képek (water, forest, farm, town, mountain)

---

## ⚙️ Futtatás

1. Nyisd meg az `index.html` fájlt böngészőben

vagy

2. Használj Live Server-t (VS Code ajánlott)

---

## 💡 Kiemelt megoldások

- Mátrix alapú térkép kezelés
- Shape alapú elem elhelyezés
- DOM manipuláció komplex logikával
- Randomizált küldetés rendszer
- Több lépéses pontszámítás

---

## 🎯 Fejlesztési lehetőségek

- Drag & drop elhelyezés
- Mentés (localStorage)
- Multiplayer mód
- UI/UX fejlesztés
- Animációk

---

# 🇬🇧 English documentation

## 🎮 Overview

Mapmaker Game is a single-player, strategy-style tile placement game built with JavaScript.

The goal of the game is to place different terrain elements on an 11x11 grid while earning points based on time and mission objectives.

---

## 🚀 Gameplay

- The game is played on an 11x11 grid
- Randomly generated elements must be placed by clicking on the map (forest, water, town, farm)
- Each element consumes time units
- The game lasts for 28 time units
- Elements can be:
  - rotated
  - mirrored
- The game is divided into 4 seasons (spring, summer, autumn, winter)

---

## 🧠 Scoring and logic

- Scoring is based on missions
- Different missions are active each season
- Final score is the sum of all seasonal results
- Bonus points can be earned for special conditions (e.g. surrounding mountains)

---

## 🎯 Main features

- Grid-based map generation
- Dynamic element placement
- Rotation and mirroring
- Time-based gameplay
- Season-based scoring system
- Multiple mission types (basic + extra)
- Real-time score updates

---

## 🛠 Technologies used

- JavaScript (vanilla)
- HTML
- CSS
- Bootstrap (layout)

---

## 📁 Project structure

- `index.html` – UI and game board  
- `script.js` – core game logic  
- `style.css` – styling  

assets:
- terrain images (water, forest, farm, town, mountain)

---

## ⚙️ Running the project

1. Open the `index.html` file in your browser

or

2. Use Live Server (recommended in VS Code)

---

## 💡 Key implementations

- Matrix-based map handling
- Shape-based element placement
- Complex DOM manipulation
- Randomized mission system
- Multi-step scoring logic

---

## 🎯 Possible improvements

- Drag & drop placement
- Save system (localStorage)
- Multiplayer mode
- UI/UX improvements
- Animations
