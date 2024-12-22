"use strict"

function Task1() { // функция 1
    alert("Вас приветствует учебный центр");
    let name = prompt("Введите имя");
    alert("Добро пожаловать на наши курсы, "+name);
    let status = confirm("Хотите стать Web-дизайнером?");

    if (status) {
        alert("Учите стили CSS и JavaScript!");
    }
    else {
        alert("Упускаете время!");
    }
}

function Task2() {
    console.log((10 + 5));
    console.log(("10" + "5"));
    document.write("<h2>" + (22 + "5") + ", ") + "</h2";
    document.write("<h2>" + ("22" + 5) + "</h2>");
    alert("- Результатом сложения строки и числа всегда будет строка");
}

function Task3() {
    let x = 525;
    let y = 234237;

    let value1 = (35*y-25*x)/5 + 232;
    let value2 = (8*y/x+5*x/y - 43)*46;

    console.log(value1, value2);
    document.write("<h2>"  + value1  % value2 + "</h2>");
    alert(value1 % value2);
}

function Task4() {
    let x = Number(prompt("Введите число: "));    

    if ((x < 20 || x > 40) && (x != 15 && x % 5 == 0)) {
        document.write("<h2>" + "Правильное значение" + "</h2>");  
    }
    else {
        document.write("<h2>" + "Неправильное значение" + "</h2>");
    }
}

function Task42() {
    let x = Number(prompt("Введите число для проверки подпункта 4: "));

    if ((x > 10) && ((x > 100) || (x == 15))) {
        console.log("урааа");
    }
}

function Task5() {
    let value1 = Number(prompt("Введите число А: "));
    let value2 = Number(prompt("Введите число Б: "));
    
    if (value1 == value2) {
        document.write("<h2>" + "А равно Б" + "</h2>");
    }
    else if (value1 < value2) {
        document.write("<h2>" + "А меньше Б" + "</h2>");
    }
    else {
        document.write("<h2>" + "A больше Б" + "</h2>");
    }
}

function Task6() {
    let nowDate = (new Date).getDay();

    switch (nowDate) {
        case 0:
            console.log("Воскресенье");
            break;
        case 1:
            console.log("Понедельник");
            break;
        case 2:
            console.log("Вторник");
            break;
        case 3:
            console.log("Среда");
            break;
        case 4:
            console.log("Четверг");
            break;
        case 5:
            console.log("Пятница");
            break;
        case 6:
            console.log("Суббота");
            break;
    }
}

function Task7() {
    let valueTest1 = 0b11;
    let valueTest2 = 0o67;
    let valueTest3 = 0x1abc;
    console.log(valueTest1, valueTest2, valueTest3);
}

function Task8() {
    let gettedValue = Number(prompt("Введите число: "));

    try {
        if (!isNaN(gettedValue)) {
            console.log("Ура, вы ввели число!");
            gettedValue++;
        }
        else {
            throw new Error("Is not a number!");
        }
    }
    catch (err) {
        console.error("gettedValue это не число!");
    }
}

/*
    вызовы функций по порядку, как требует этого лабораторная работа
*/

Task1();
Task2();
Task3();
Task4();
Task42();
Task5();        
Task6();
Task7();
Task8();