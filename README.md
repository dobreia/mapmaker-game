# Mapmaker Game

🌐 Live demo: https://dobreia.github.io/mapmaker-game/index.html

## 🎮 Áttekintés

A Mapmaker Game egy egyszemélyes, stratégiai jellegű tile placement játék, amely JavaScript-ben készült.

A játék során egy 11x11-es rácsos térképre kell különböző alakzatú terepelemeket elhelyezni, miközben idő és küldetések alapján pontokat gyűjtünk.

---

## 🚀 Játékmenet

- A játék egy 11x11-es térképen zajlik
- Véletlenszerűen kapott elemeket kell elhelyezni, a térképre kattintva. (erdő, víz, város, farm)
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
- Bootstrap (layouthoz)

---

## 📁 Projekt struktúra

index.html – UI és játéktér  
script.js – teljes játékmenet logika  
style.css – megjelenés  

assets:
- terrain képek (water, forest, farm, town, mountain)

---

## ⚙️ Futtatás

1. Nyisd meg az index.html fájlt böngészőben

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

## 📄 Megjegyzés

A projekt egy egyetemi feladat keretében készült, de a játékmenet és logika valós játékmechanikákat modellez.
