"use strict"

function Task1() {
    let randomArray = [];
    let max = 25;

    for (let i = 0; i < 9; i++) {
        randomArray.push(Math.round(Math.random() * (max-1)));
    }

    let writedValue = Number(prompt("Введите число от 0 до 25: "));

    if (!isNaN(writedValue)) {
        if (randomArray.includes(writedValue)) {
            let warnP = document.createElement("p");
            warnP.textContent = "Вы угадали!";
            warnP.style.fontSize = "16px";
            warnP.style.color = "rgb(0,255,0)";
            document.body.appendChild(warnP);
        }
        else {
            let warnP = document.createElement("p");
            warnP.textContent = "Упс, вы не угадали!";
            warnP.style.fontSize = "16px";
            warnP.style.color = "rgb(255,0,0)";
            document.body.appendChild(warnP); 
        }
    }
    else {
        let warnP = document.createElement("p");
        warnP.textContent = "Вы ввели не число!";
        warnP.style.fontSize = "16px";
        warnP.style.color = "rgb(255,100,0)";
        document.body.appendChild(warnP);
    }

    console.log(randomArray);
}

function Task2() {
    let randomArray = [];
    let max = 25;

    let randomIndex = Math.round( Math.random() * 30 );
    for (let i = 0; i < 9; i++) {
        if (randomIndex == i) {
            randomArray.push(NaN);
        }
        else {
            randomArray.push(Math.round(Math.random() * max));
        }
    }

    if (randomArray.indexOf(NaN) !== -1) {
        let warnP = document.createElement("p");
        warnP.textContent = "Элемент найден с помощью .indexOf()! Индекс: " + randomArray.indexOf(NaN);
        warnP.style.fontSize = "16px";
        warnP.style.color = "rgb(0,255,0)";
        document.body.appendChild(warnP);
    }
    else {
        let warnP = document.createElement("p");
        warnP.textContent = "Элемент не найден с помощью .indexOf()! Индекс: " + randomArray.indexOf(NaN);
        warnP.style.fontSize = "16px";
        warnP.style.color = "rgb(255,100,0)";
        document.body.appendChild(warnP);
    }

    if (randomArray.includes(NaN)) {
        let warnP = document.createElement("p");
        warnP.textContent = "Элемент найден с помощью .includes()!";
        warnP.style.fontSize = "16px";
        warnP.style.color = "rgb(0,255,0)";
        document.body.appendChild(warnP);
    }
    else {
        let warnP = document.createElement("p");
        warnP.textContent = "Элемент не найден с помощью .includes()!";
        warnP.style.fontSize = "16px";
        warnP.style.color = "rgb(255,100,0)";
        document.body.appendChild(warnP);
    }

    console.log(randomArray);
}

let symbols = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
function Task3() {
    let createdSymbolArr = [];

    for (let i = 0; i < 15; i++) {
        createdSymbolArr.push( symbols.charAt(Math.round(Math.random() * (symbols.length-1))) );
    }

    let userWord = prompt("Введите любую букву кириллицы: ");
    if (createdSymbolArr.indexOf(userWord) !== -1) {
        let warnP = document.createElement("p");
        warnP.textContent = "Вы угадали, данная буква есть в рандомном списке!";
        warnP.style.fontSize = "16px";
        warnP.style.color = "rgb(0,255,0)";
        document.body.appendChild(warnP);
    }
    else {        
        let warnP = document.createElement("p");
        warnP.textContent = "Вы не угадали, такой буквы нет :(";
        warnP.style.fontSize = "16px";
        warnP.style.color = "rgb(255,0,0)";
        document.body.appendChild(warnP);
    }

    console.log(createdSymbolArr);
}

let values = [
    1234**2 * 23/5 + 234,
    28 * 765**2 / 5 * 43**2,
    3734**6 - (434**6 +1024**4) / 5,
    6543**35 - 965732,
    (1000**10 + 100000**10) / 10000,
];

function Task4() {
    for (let index in values) {
        let warnP = document.createElement("p");
        warnP.textContent = "Созданное число: " + Math.round(values[index]);
        warnP.style.fontSize = "24px";
        warnP.style.color = "rgb(0,255,0)";
        document.body.appendChild(warnP);
    }
}