/*ELEMEK
VALUE:
mountain: 1
water: 2
town: 3
forest: 4
farm: 5
*/
const elements = [
    {
        time: 2,
        type: 'water',
        shape: [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'forest',
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [
            [1, 1, 1],
            [0, 0, 1],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [
            [1, 1, 1],
            [0, 0, 1],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [
            [1, 1, 0],
            [1, 0, 0],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [
            [1, 1, 1],
            [1, 1, 0],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [
            [1, 1, 1],
            [1, 0, 0],
            [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [
            [1, 0, 0],
            [1, 1, 1],
            [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 1]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 0]],
        rotation: 0,
        mirrored: false,
        value: 2
    },
]
const missions =
{
    "basic": [
        {
            "title": "Az erdő széle",
            "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."
        },
        {
            "title": "Álmos-völgy",
            "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."
        },
        {
            "title": "Krumpliöntözés",
            "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."
        },
        {
            "title": "Határvidék",
            "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz."
        }
    ],
    "extra": [
        {
            "title": "Fasor",
            "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."
        },
        {
            "title": "Öntözőcsatorna",
            "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."
        },
        {
            "title": "Sorház",
            "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő városmezők mindegyikéért kettő-kettő pontot kapsz."
        },
        {
            "title": "Üres telek",
            "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."
        },
        {
            "title": "Mágusok völgye",
            "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."
        },
        {
            "title": "Páratlan silók",
            "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."
        },
    ],
}

const allMissions = [
    ...missions.basic,
    ...missions.extra
];

const timeLeftElement = document.querySelector("#time-left");
const rotateButton = document.querySelector("#rotate-button");
const mirrorButton = document.querySelector("#mirror-button");
const gameContainer = document.querySelector("#game-container");
missions.basic.sort(() => Math.random() - 0.5);
allMissions.sort(() => Math.random() - 0.5);
let currentElement;

function game() {
    giveRandomElement(elements)
    initMap();
    giveRandomMission(allMissions);
    main();

}

function main() {
    const cells = document.querySelectorAll(".cell");
    let clicked = 0;
    let time = 28;
    const timeLeft = document.querySelector("#time-left");
    timeLeft.innerHTML = time;
    let gameEnded = false;
    whichSeason(time);
    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            if (gameEnded) {
                return;
            }
            const rowClicked = Math.floor(index / 11); // A kattintott cella sora
            const colClicked = index % 11; // A kattintott cella oszlopa
            clicked++;
            time = time - currentElement.time;
            timeLeft.innerHTML = time;
            whichSeason(time);
            if (currentElement) {
                const currentElementTable = document.querySelector("#current-element-table");


                const currentElementRow = Math.floor(currentElement.shape.length / 2); // Az aktuális elem középső sorának sorszáma
                const currentElementCol = Math.floor(currentElement.shape[0].length / 2); // Az aktuális elem középső oszlopának sorszáma

                for (let i = 0; i < currentElementTable.rows.length; i++) {
                    for (let j = 0; j < currentElementTable.rows[i].cells.length; j++) {
                        if (currentElement.shape[i][j] === 1) {
                            const targetRow = rowClicked + i - currentElementRow;
                            const targetCol = colClicked + j - currentElementCol;

                            if (targetRow >= 0 && targetRow < 11 && targetCol >= 0 && targetCol < 11) {
                                const targetCellIndex = targetRow * 11 + targetCol; // A célcella indexe
                                const imageUrl = getImg(currentElement.type);
                                if (currentElement.type == "water") {
                                    cells[targetCellIndex].setAttribute("value", "2");
                                }
                                else if (currentElement.type == "town") {
                                    cells[targetCellIndex].setAttribute("value", "3");
                                }
                                else if (currentElement.type == "forest") {
                                    cells[targetCellIndex].setAttribute("value", "4");
                                }
                                else if (currentElement.type == "farm") {
                                    cells[targetCellIndex].setAttribute("value", "5");
                                }
                                cells[targetCellIndex].style.backgroundImage = `url(${imageUrl})`;
                                cells[targetCellIndex].style.backgroundSize = "cover";
                            }
                        }
                    }
                }
            }
            if (time <= 0) {
                if (time < 0) {
                    timeLeft.innerHTML = 0; // Ne menjen minuszba a hátrlévő idő
                }
                gameEnded = true;
                endOfGame();
                return;
            } else {
                giveRandomElement(elements);
            }
            let springPoints = document.querySelector("#spring-point");
            let summerPoints = document.querySelector("#summer-point");
            let autumnPoints = document.querySelector("#autumn-point");
            let winterPoints = document.querySelector("#winter-point");

            let springPointText = 0;
            let summerPointText = 0;
            let autumnPointText = 0;
            let winterPointText = 0;
            if (time > 21) {
                springPointText += missionPoints(allMissions[0].title);
                springPointText += missionPoints(allMissions[1].title);
                springPoints.innerHTML = springPointText;

                updateMissionPoints(allMissions[0]);
                updateMissionPoints(allMissions[1]);
            } else if (time > 14 && time <= 21) {
                summerPointText += missionPoints(allMissions[1].title);
                summerPointText += missionPoints(allMissions[2].title);
                summerPoints.innerHTML = summerPointText;

                updateMissionPoints(allMissions[1]);
                updateMissionPoints(allMissions[2]);
            } else if (time > 7 && time <= 14) {
                autumnPointText += missionPoints(allMissions[2].title);
                autumnPointText += missionPoints(allMissions[3].title);
                autumnPoints.innerHTML = autumnPointText;

                updateMissionPoints(allMissions[2]);
                updateMissionPoints(allMissions[3]);
            } else {
                winterPointText += missionPoints(allMissions[3].title);
                winterPointText += missionPoints(allMissions[0].title);
                winterPoints.innerHTML = winterPointText;

                updateMissionPoints(allMissions[3]);
                updateMissionPoints(allMissions[0]);
            }


        });
    });
}

let mapMatrix = [];
// Táblázat létrehozása, hegyek legenerálása
function initMap() {
    const mapElement = document.querySelector("#map");
    for (let row = 0; row < 11; row++) {
        let matrixRow = []
        for (let col = 0; col < 11; col++) {
            const cell = document.createElement("div");
            cell.setAttribute("value", "0");
            matrixRow.push(cell)
            cell.className = "cell";

            if ([1].includes(row) && [1].includes(col) || [3].includes(row) && [8].includes(col) || [5].includes(row) && [3].includes(col) || [8].includes(row) && [9].includes(col) || [9].includes(row) && [5].includes(col)) {
                cell.style.backgroundImage = "url('mountain.png')";
                cell.setAttribute("value", "1");
                cell.style.backgroundSize = "cover";
            }

            mapElement.appendChild(cell);
        }
        mapMatrix.push(matrixRow);
    }
}

// Az element objektumok véletlenszerű sorrendbe keverése
elements.sort(() => Math.random() - 0.5);

// Az aktuális elem cella háttérszínének beállítása az type alapján
function giveRandomElement(element) {
    let randomNumber = Math.floor(Math.random() * element.length);
    currentElement = element[randomNumber];
    const currentElementTable = document.querySelector("#current-element-table");
    const currentElementText = document.querySelector("#current-element");
    currentElementText.innerHTML = currentElement.time + ' időegység';

    for (let i = 0; i < currentElementTable.rows.length; i++) {
        const row = currentElementTable.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            if (currentElement.shape[i][j] === 1) {
                const imageUrl = getImg(currentElement.type);
                cell.style.backgroundImage = `url(${imageUrl})`;
                cell.style.backgroundSize = "cover";
            } else {
                cell.style.backgroundImage = "none";
            }
        }
    }
}

function getImg(type) {
    switch (type) {
        case "water":
            return "water.png";
        case "forest":
            return "forest.png";
        case "farm":
            return "farm.png";
        case "town":
            return "town.png";
        default:
            return "";
    }
}
// Aktuális elem forgatása
function rotateButtonClicked() {
    const originalShape = currentElement.shape.map(row => [...row]);
    const size = originalShape.length;
    const newShape = [];

    for (let i = 0; i < size; i++) {
        newShape.push([]);
        for (let j = 0; j < size; j++) {
            newShape[i][j] = originalShape[size - j - 1][i];
        }
    }

    currentElement.shape = newShape;
    updateCurrentElementTable(newShape);
}

// Aktuális elem tükrözése
function mirrorButtonClicked() {
    const originalShape = currentElement.shape.map(row => [...row]);
    const size = originalShape.length;
    const newShape = [];

    for (let i = 0; i < size; i++) {
        newShape.push([]);
        for (let j = 0; j < size; j++) {
            newShape[i][j] = originalShape[i][size - j - 1];
        }
    }
    currentElement.shape = newShape;
    updateCurrentElementTable(newShape);
}


function updateCurrentElementTable(newShape) {
    const currentElementTable = document.querySelector("#current-element-table");

    for (let i = 0; i < currentElementTable.rows.length; i++) {
        const row = currentElementTable.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            if (newShape[i][j] === 1) {
                cell.style.backgroundImage = `url(${getImg(currentElement.type)})`;
                cell.style.backgroundSize = "cover";
            } else {
                cell.style.backgroundImage = "none";
            }
        }
    }
}



// Gombok kezelése (forgatás és tükrözés)
rotateButton.addEventListener("click", rotateButtonClicked)

mirrorButton.addEventListener("click", mirrorButtonClicked);


const missionTitleA = document.querySelector("#missionTitle-A")
const missionTitleB = document.querySelector("#missionTitle-B")
const missionTitleC = document.querySelector("#missionTitle-C")
const missionTitleD = document.querySelector("#missionTitle-D")
const missionDesA = document.querySelector("#missionDescription-A")
const missionDesB = document.querySelector("#missionDescription-B")
const missionDesC = document.querySelector("#missionDescription-C")
const missionDesD = document.querySelector("#missionDescription-D")
function giveRandomMission(allMissions) {
    missionTitleA.innerHTML = allMissions[0].title;
    missionDesA.innerHTML = allMissions[0].description;

    missionTitleB.innerHTML = allMissions[1].title;
    missionDesB.innerHTML = allMissions[1].description;

    missionTitleC.innerHTML = allMissions[2].title;
    missionDesC.innerHTML = allMissions[2].description;

    missionTitleD.innerHTML = allMissions[3].title;
    missionDesD.innerHTML = allMissions[3].description;
}

// Küldetések kiemelése évszak szerint
function whichSeason(time) {
    const missionA = document.querySelector("#mission-A");
    const missionB = document.querySelector("#mission-B");
    const missionC = document.querySelector("#mission-C");
    const missionD = document.querySelector("#mission-D");
    const spring = document.querySelector("#spring");
    const summer = document.querySelector("#summer");
    const winter = document.querySelector("#winter");
    const autumn = document.querySelector("#autumn");

    switch (true) {
        case time > 21:
            missionA.style.border = "2px black solid"
            missionA.style.backgroundColor = "#e4e467"
            missionB.style.border = "2px black solid"
            missionB.style.backgroundColor = "#e4e467"
            spring.style.border = "2px black solid"
            spring.style.backgroundColor = "#e4e467"

            missionC.style.border = "1px solid #ccc"
            missionC.style.backgroundColor = "white"
            missionD.style.border = "1px solid #ccc"
            missionD.style.backgroundColor = "white"
            summer.style.border = "1px solid #ccc"
            summer.style.backgroundColor = "white"
            autumn.style.border = "1px solid #ccc"
            autumn.style.backgroundColor = "white"
            winter.style.border = "1px solid #ccc"
            winter.style.backgroundColor = "white"

            break;
        case time > 14:
            missionB.style.border = "2px black solid"
            missionB.style.backgroundColor = "#95ff93"
            missionC.style.border = "2px black solid"
            missionC.style.backgroundColor = "#95ff93"
            summer.style.border = "2px black solid"
            summer.style.backgroundColor = "#95ff93"

            missionA.style.border = "1px solid #ccc"
            missionA.style.backgroundColor = "white"
            missionD.style.border = "1px solid #ccc"
            missionD.style.backgroundColor = "white"
            spring.style.border = "1px solid #ccc"
            spring.style.backgroundColor = "white"
            autumn.style.border = "1px solid #ccc"
            autumn.style.backgroundColor = "white"
            winter.style.border = "1px solid #ccc"
            winter.style.backgroundColor = "white"
            break;
        case time > 7:
            missionC.style.border = "2px black solid"
            missionC.style.backgroundColor = "#b58f4f"
            missionD.style.border = "2px black solid"
            missionD.style.backgroundColor = "#b58f4f"
            autumn.style.border = "2px black solid"
            autumn.style.backgroundColor = "#b58f4f"

            missionA.style.border = "1px solid #ccc"
            missionA.style.backgroundColor = "white"
            missionB.style.border = "1px solid #ccc"
            missionB.style.backgroundColor = "white"
            summer.style.border = "1px solid #ccc"
            summer.style.backgroundColor = "white"
            spring.style.border = "1px solid #ccc"
            spring.style.backgroundColor = "white"
            winter.style.border = "1px solid #ccc"
            winter.style.backgroundColor = "white"
            break;
        default:
            missionD.style.border = "2px black solid"
            missionD.style.backgroundColor = "#75b7d4"
            missionA.style.border = "2px black solid"
            missionA.style.backgroundColor = "#75b7d4"
            winter.style.border = "2px black solid"
            winter.style.backgroundColor = "#75b7d4"

            missionC.style.border = "1px solid #ccc"
            missionC.style.backgroundColor = "white"
            missionB.style.border = "1px solid #ccc"
            missionB.style.backgroundColor = "white"
            summer.style.border = "1px solid #ccc"
            summer.style.backgroundColor = "white"
            autumn.style.border = "1px solid #ccc"
            autumn.style.backgroundColor = "white"
            spring.style.border = "1px solid #ccc"
            spring.style.backgroundColor = "white"
    }
}

function missionPoints(mission) {
    switch (mission) {
        case "Az erdő széle": return erdoSzele();
        case "Álmos-völgy": return almosVolgy();
        case "Krumpliöntözés": return krumpliontozes()
        case "Határvidék": return hatarVidek();
        case "Fasor": return fasor();
        case "Öntözőcsatorna": return ontozocsatorna();
        case "Sorház": return sorhaz();
        case "Üres telek": return uresTelek();
        case "Mágusok völgye": return magusokVolgye();
        case "Páratlan silók": return paratlanSilok();
        default: return 0;
    }

}

// Küldetéskártyán lévő pontok frissítése
function updateMissionPoints(mission) {
    const missionPointsA = document.querySelector("#mission-a-points");
    const missionPointsB = document.querySelector("#mission-b-points");
    const missionPointsC = document.querySelector("#mission-c-points");
    const missionPointsD = document.querySelector("#mission-d-points");
    if (mission == allMissions[0]) {
        missionPointsA.innerHTML = missionPoints(mission.title)
    } else if (mission == allMissions[1]) {
        missionPointsB.innerHTML = missionPoints(mission.title)
    } else if (mission == allMissions[2]) {
        missionPointsC.innerHTML = missionPoints(mission.title)
    } else {
        missionPointsD.innerHTML = missionPoints(mission.title)
    }
}

// KÜLDETÉSEK
function mountains() {
    let points = 0
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (parseInt(mapMatrix[i][j].getAttribute("value")) == 1 && parseInt(mapMatrix[i + 1][j].getAttribute("value")) != 0 && parseInt(mapMatrix[i - 1][j].getAttribute("value")) != 0 && parseInt(mapMatrix[i][j + 1].getAttribute("value")) != 0 && parseInt(mapMatrix[i][j - 1].getAttribute("value")) != 0) {
                points++;
            }
        }
    }
    return points;
}
function erdoSzele() {
    let points = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if ((i === 0 || i === 10 || j === 0 || j === 10) && parseInt(mapMatrix[i][j].getAttribute("value")) === 4) {
                points++;
            }
        }
    }
    return points;
}


function almosVolgy() {
    let points = 0, counter, res = 0;

    for (let i = 0; i < 11; i++) {
        counter = 0;
        for (let j = 0; j < 11; j++) {
            if (parseInt(mapMatrix[i][j].getAttribute("value")) == 4) {
                counter++;
                if (counter > 3) {
                    counter = 0;
                }
            }

        }
        if (counter == 3) {
            res += 4;
        }
    }
    return res;
}

function krumpliontozes() {
    let points = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (parseInt(mapMatrix[i][j].getAttribute("value")) == 2) {
                if (i + 1 < 11 && parseInt(mapMatrix[i + 1][j].getAttribute("value")) == 5) {
                    points += 2;
                }
                if (i - 1 >= 0 && parseInt(mapMatrix[i - 1][j].getAttribute("value")) == 5) {
                    points += 2;
                }
                if (j + 1 < 11 && parseInt(mapMatrix[i][j + 1].getAttribute("value")) == 5) {
                    points += 2;
                }
                if (j - 1 >= 0 && parseInt(mapMatrix[i][j - 1].getAttribute("value")) == 5) {
                    points += 2;
                }
            }
        }
    }
    return points;
}

function hatarVidek() {
    let colPoints, rowPoints, sumPoints = 0;
    for (let i = 0; i < 11; i++) {
        colPoints = 0;
        rowPoints = 0;
        for (let j = 0; j < 11; j++) {
            if (parseInt(mapMatrix[i][j].getAttribute("value")) > 1) {
                rowPoints++;
            }
            if (parseInt(mapMatrix[j][i].getAttribute("value")) > 1) {
                colPoints++;
            }
        }
        if (rowPoints == 11 || colPoints == 11) {
            sumPoints++;
        }

    }
    return sumPoints * 6;
}

//extra kuldetesek
function fasor() {
    let points = 0, max = 0, counter;
    for (let j = 0; j < 11; j++) {
        counter = 1;
        for (let i = 0; i < 10; i++) {
            if (parseInt(mapMatrix[i][j].getAttribute("value")) == 4 && parseInt(mapMatrix[i + 1][j].getAttribute("value")) == 4) {
                counter++;
            }
        }
        if (counter != 1 && counter > max) {
            max = counter;
        }
    }
    return max * 2;
}

function ontozocsatorna() {
    let farm, water, points = 0;
    for (let j = 0; j < 11; j++) {
        farm = 0, water = 0;
        for (let i = 0; i < 11; i++) {
            if (parseInt(mapMatrix[i][j].getAttribute("value")) == 2) {
                water++;
            }
            if (parseInt(mapMatrix[i][j].getAttribute("value")) == 5) {
                farm++;
            }
        }
        if (water >= 1 && farm >= 1 && water == farm) {
            points += 4;
        }
    }
    return points;
}

function sorhaz() {
    let points = 0, max = 0, counter;
    for (let i = 0; i < 11; i++) {
        counter = 1;
        for (let j = 0; j < 10; j++) {
            if (parseInt(mapMatrix[i][j].getAttribute("value")) == 3 && parseInt(mapMatrix[i][j + 1].getAttribute("value")) == 3) {
                counter++;
            }
        }
        if (counter != 1 && counter > max) {
            max = counter;
        }
    }
    return max * 2;
}

function uresTelek() {
    let points = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (parseInt(mapMatrix[i][j].getAttribute("value")) == 0) {
                if (i + 1 < 11 && parseInt(mapMatrix[i + 1][j].getAttribute("value")) == 3) {
                    points += 2;
                }
                if (i - 1 >= 0 && parseInt(mapMatrix[i - 1][j].getAttribute("value")) == 3) {
                    points += 2;
                }
                if (j + 1 < 11 && parseInt(mapMatrix[i][j + 1].getAttribute("value")) == 3) {
                    points += 2;
                }
                if (j - 1 >= 0 && parseInt(mapMatrix[i][j - 1].getAttribute("value")) == 3) {
                    points += 2;
                }
            }
        }
    }
    return points;
}

function magusokVolgye() {
    let points = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (parseInt(mapMatrix[i][j].getAttribute("value")) == 2) {
                if (i + 1 < 11 && parseInt(mapMatrix[i + 1][j].getAttribute("value")) == 1) {
                    points += 3;
                }
                if (i - 1 >= 0 && parseInt(mapMatrix[i - 1][j].getAttribute("value")) == 1) {
                    points += 3;
                }
                if (j + 1 < 11 && parseInt(mapMatrix[i][j + 1].getAttribute("value")) == 1) {
                    points += 3;
                }
                if (j - 1 >= 0 && parseInt(mapMatrix[i][j - 1].getAttribute("value")) == 1) {
                    points += 3;
                }
            }
        }
    }
    return points;
}

function paratlanSilok() {
    let points, sumPoints = 0;
    for (let j = 0; j < 11; j++) {
        points = 0;
        for (let i = 0; i < 11; i++) {
            if ((j + 1) % 2 != 0 && parseInt(mapMatrix[i][j].getAttribute("value")) > 1) {
                points++
            }
        }
        if (points == 11) {
            sumpPoints += 10;
        }

    }
    return sumPoints;
}



function endOfGame() {
    const sumPoint = document.querySelector("#sum-point");
    const springPoint = document.querySelector("#spring-point")
    const summerPoint = document.querySelector("#summer-point")
    const autumnPoint = document.querySelector("#autumn-point")
    const winterPoint = document.querySelector("#winter-point")

    let springPointText = springPoint.textContent;
    let summerPointText = summerPoint.textContent;
    let winterPointText = winterPoint.textContent;
    let autumnPointText = autumnPoint.textContent;
    let res = 0;
    res = parseInt(springPointText) + parseInt(summerPointText) + parseInt(winterPointText) + parseInt(autumnPointText) + mountains();
    sumPoint.innerHTML = res;

}


// Játék futtatása
game();
