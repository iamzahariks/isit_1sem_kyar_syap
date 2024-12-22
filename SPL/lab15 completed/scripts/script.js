"use strict"

function Task1() {
    let myText = RegExp(prompt("Введите текст: "), "s");
    let needText = RegExp(prompt("Введите текст для проверки: "));

    console.log("Соответствует ли текст другому тексту с флагом s: " + myText.test(needText.source));
}

function Task2() {
    let myText = prompt("Введите строку с многострочным вхождением: [u] ... [/u]: ");
    let result = (myText.replace("[u]", "<u>")).replace("[/u]", "</u>");

    let gettedText = document.createElement("p");
    gettedText.innerHTML = result;
    document.body.append(gettedText);

    console.log("Результат: " + result);
}

function Task3() {
    let myText = prompt("Введите строку, которая заменит любые открывающие теги на <a>: ");
    let result = myText.replace(/<\w{1,}>/g, "<a>");

    console.log(result);
}

function Task4() {
    let myText = prompt("Введите строку содержащей два слова: ");
    let allWords = myText.match(/\w+/g);

    for (let key of allWords.keys()) {
        myText = myText.replace(myText.match(/\w+/g)[1-key], allWords[key]);
    }

    console.log(myText);
}

function Task5() {
    let student = {
        name: "Vasya",
        surname: "Vasilievich",
        age: 23,
        iq: 98,
    }

    function removeIq({iq, ...other}) {
        return other;
    }

    console.log( removeIq(student) );
}

function Task6() {
    let person = {name: "Zakhar", surname: "Pazniak", age: 18};
    let studentInfo = {math: 9, physics: 9};
    let accountPassword = {password: "323FDDS5654", login: "zakharPazniak"};

    let me = {...person, ...studentInfo, ...accountPassword};
    function secureInfo({password, login, ...args}) {
        return args;
    }

    console.log(secureInfo(me));
}