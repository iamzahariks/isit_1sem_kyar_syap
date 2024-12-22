"use strict"

function Task1() {
    let myObject = {
        name: "Zakhar",
        surname: "Pazniak",
        money: 0,

        addMoney: (x) => {
            this.money += x;
        },

        removeMoney: (x) => {
            this.money -= x;
        }
    }

    for (let value of Object.values(myObject)) {
        let createdText = document.createElement("p");
        createdText.textContent = String(value);
        createdText.style.fontSize = "24px";
        createdText.style.color = "red";
        document.body.appendChild(createdText);
    }

    for (let key of Object.keys(myObject)) {
        let createdText = document.createElement("p");
        createdText.textContent = key;
        createdText.style.fontSize = "24px";
        createdText.style.color = "green";
        document.body.appendChild(createdText);
    }
}

function Task2() {
    let listOfNumbers = [5, 14, 324, 1234, 53044];
    let listOfNumbers1 = [5, 14, 324, 1234, 53044];

    listOfNumbers.map( function(value, index) {
        listOfNumbers[index] = value.toString().padStart(10, "0");
    } );

    listOfNumbers1.map( function(value, index) {
        listOfNumbers1[index] = value.toString().padEnd(10, "0");
    } );

    for (let key in listOfNumbers) {
        let createdText = document.createElement("p");
        createdText.textContent = listOfNumbers[key] + " " + listOfNumbers1[key];
        createdText.style.fontSize = "24px";
        createdText.style.color = "green";
        document.body.appendChild(createdText);
    }
}

let symbols = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
function Task3() {
    let myName = "ZakharPoznyak18";
    let writingSymbols = "";

    for (let i = 0; i < 10; i++) {
        writingSymbols += symbols[Math.round( Math.random() * (symbols.length-1))];
    }

    let createdText = document.createElement("p");
    createdText.textContent = myName.padStart(myName.length + writingSymbols.length, writingSymbols);
    createdText.style.fontSize = "24px";
    createdText.style.color = "green";
    document.body.appendChild(createdText);
}

function Task4() {
    let listOfSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p"];
    let count1 = 5; let countStep = 4;

    listOfSymbols.map(function(value, index) {
        listOfSymbols[index] = (value.padStart(count1 + 1, "1")).padEnd(count1 + countStep + 1, " ") + "0";
    })

    for (let value of listOfSymbols) {
        let createdText = document.createElement("p");
        createdText.textContent = value;
        createdText.style.fontSize = "24px";
        createdText.style.color = "green";
        createdText.style.whiteSpaceCollapse = "preserve";
        document.body.appendChild(createdText);
    }
}

let student = {
    name: "Vasya",
    surname: "Vasilievich",
    m: 0,

    set money(x) {
        this.m = x;
    },

    get money() {
        return this.m;
    },
}

function Task5() {
    let propertyInfo = Object.getOwnPropertyDescriptor(student, "money");
    console.log(propertyInfo);
}

function Task6() {
    let student2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(student));

    student.money = 10;
    student2.money = 15;

    console.log(student.money, student2.money);
}