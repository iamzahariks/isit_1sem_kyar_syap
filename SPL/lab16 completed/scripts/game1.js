"use strict"

let data;

function UpdateInfo() {
    let nickname = document.getElementById("nickname");
    let email = document.getElementById("email");
    let money = document.getElementById("money");

    nickname.value = data.name;
    email.value = data.email;
    money.innerHTML = money.innerText.replace(money.innerText.match(/\d+/g)[0], data.money);
}

let gameStarted = false;
function MakeStep(e) {
    if (!gameStarted) {
        if (data.money < 10) { return; }

        gameStarted = true;
        ClearGame();

        data.money -= 10;
        SaveData();
        UpdateInfo();

        let element = document.getElementById("gameStatus");
        if (element) {
            element.remove();
        } 
    }

    if (e.target.innerText != "") { return; }
    e.target.innerText = "X";

    TryFinishGame();
    if (!gameStarted) { return; }

    EnemyStep();
    TryFinishGame();
}

function EnemyStep() {
    if (!gameStarted) { return; }

    let gameProcess = document.getElementById("gameProcess").children[0].children[0];
    let allAvailabledTagTd = GetAvailabledSteps()

    allAvailabledTagTd[Math.round(Math.random() * (allAvailabledTagTd.length - 1))].innerText = "O";
}

function TryFinishGame() {
    let gameProcess = document.getElementById("gameProcess").children[0].children[0]
    let allStepsInGame = GetAllSteps();

    let win;

    // Проверка горизонтально
    for (let k = 0; k < 3; k++) {
        if ((allStepsInGame[k * 3].innerText == allStepsInGame[1 + k * 3].innerText)
            && (allStepsInGame[k * 3].innerText == allStepsInGame[2 + k * 3].innerText) && (win == undefined)) {
            win = allStepsInGame[k * 3].innerText
        }
    }

    // Проверка вертикально
    for (let k = 0; k < 3; k++) {
        if ((allStepsInGame[k].innerText == allStepsInGame[k + 3].innerText)
            && (allStepsInGame[k].innerText == allStepsInGame[k + 6].innerText) && (win == undefined)) {
            win = allStepsInGame[k].innerText
        }
    }

    // Проверка диагонально: сверху слева
    if ((allStepsInGame[0].innerText == allStepsInGame[4].innerText)
        && (allStepsInGame[0].innerText == allStepsInGame[8].innerText) && (win == undefined)) {
        win = allStepsInGame[0].innerText
    }

    // Проверка диагонально: снизу слева
    if ((allStepsInGame[6].innerText == allStepsInGame[4].innerText)
        && (allStepsInGame[6].innerText == allStepsInGame[2].innerText) && (win == undefined)) {
        win = allStepsInGame[6].innerText
    }

    if (GetAvailabledSteps().length == 0) { win = "Draw"; }

    switch(win) {
        case("X"): {
            MakeText("Вы выиграли!", win);

            data.money += 20;
            SaveData();
            UpdateInfo();

            break;
        }
        case("O"): {
            MakeText("Вы проиграли!", win);
            break;
        }
        case("Draw"): {
            MakeText("Ничья!", win);
            break;
        }
    }

    if (win) {
        gameStarted = false;
    }
}

function MakeText(text, winner) {
    let element = document.getElementById("gameStatus");

    if (!element) { 
        element = document.createElement("p");
        element.id = "gameStatus";
        element.style.fontSize = "36px";
        element.style.textAlign = "center";
        document.getElementById("game1").appendChild(element);
    }

    element.innerText = text;
    switch (winner) {
        case ("X"): {
            element.style.color = "rgb(0,255,0)";
            break;
        }
        case ("O"): {
            element.style.color = "rgb(255,0,0)";
            break;
        }
        default: {
            element.style.color = "rgb(255, 255, 0)";
            break;
        }
    }
}

function ClearGame() {
    let gameProcess = document.getElementById("gameProcess").children[0].children[0];
    for (let tagTr of gameProcess.children) {
        for (let tagTd of tagTr.children) {
            tagTd.innerText = "";
        }
    }
}

function GetAllSteps() {
    let gameProcess = document.getElementById("gameProcess").children[0].children[0];
    let allAvailabledTagTd = [];

    for (let i = 0; i < 3; i++) {
        for (let v = 0; v < 3; v++) {
            let element = gameProcess.children[i].children[v];
            allAvailabledTagTd.push(element);
        }
    }

    return allAvailabledTagTd;
}

function GetAvailabledSteps() {
    let gameProcess = document.getElementById("gameProcess").children[0].children[0];
    let allAvailabledTagTd = [];

    for (let i = 0; i < 3; i++) {
        for (let v = 0; v < 3; v++) {
            let element = gameProcess.children[i].children[v];
            if (element.innerText != "") { continue; }
            allAvailabledTagTd.push(element);
        }
    }

    return allAvailabledTagTd;
}

let functions = [
    UpdateInfo,

    function () {
        let nickname = document.getElementById("nickname");
        let email = document.getElementById("email");

        nickname.addEventListener("change", function () {
            data.name = nickname.value;
            SaveData();
        })

        email.addEventListener("change", function () {
            data.email = email.value;
            SaveData();
        })
    },

    function () {
        let minigamesButton = document.getElementById("minigames");
        let minigamesMenu = document.getElementById("menu-games");

        minigamesButton.addEventListener("mouseenter", function () {
            minigamesMenu.style.visibility = "visible";
        })

        minigamesButton.addEventListener("mouseleave", function () {
            minigamesMenu.style.visibility = "hidden";
        })

        minigamesMenu.style.visibility = "hidden";
    },

    function () {
        let giveMoney = document.getElementById("giveMoney");
        giveMoney.addEventListener("mousedown", function () {
            data.money += 10;
            UpdateInfo();
            SaveData();
        })
    },

    function () {
        let gameProcess = document.getElementById("gameProcess");

        gameProcess.addEventListener("mousedown", function (e) {
            MakeStep(e);
        })
    }
];

function WebSiteLoaded() {
    document.cookie = " ";
    if (document.cookie.length == 0) {
        data = { name: "Zakhar", email: "Zakhar@gmail.com", money: 100 };
        SaveData()
    }
    else {
        console.log(document.cookie)
        data = JSON.parse(document.cookie);
    }

    for (let func of Object.values(functions)) {
        func();
    }
}

function SaveData() {
    document.cookie = JSON.stringify(data);
}

WebSiteLoaded();