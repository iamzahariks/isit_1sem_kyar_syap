"use strict"

let Task1 = () => { // функция 1
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
    document.write("<h2  style='color: aqua;'>" + (22 + "5") + "</h2>");
    document.write("<h2 style='color: red;'>" + ("22" + 5) + "</h2>");
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
        document.write("<h2 style='color: blue; font-size: 64px'> Правильное значение </h2>");  
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

function Task9() {
    let value0 = Number(prompt("Введите число a:"));
    let value1 = Number(prompt("Введите число b:"));

    let createdTable = "<table border='1'>";

    for (let a = 1; a <= value0; a++) {
        createdTable += "<tr>";
        for (let b = 1; b <= value1; b++) {
            createdTable += "<td style='width: 75px; height: 25px'>" + a*b + "</td>";
        }
        createdTable += "</tr>";
    }

    document.write(createdTable + "</table>");
}

function Task10() {
    let value0 = Number(prompt("Введите число a:"));
    let value1 = Number(prompt("Введите число b:"));

    let createdTable = "<table border='1'>";
    createdTable += "<tr> <td> Радиус </td> <td> Площадь круга </td> <td> Длина окружности </td> </tr>";

    let i = value0;
    while (i < value1) {
        createdTable += "<tr>" + "<td>" + i + "</td>" + "<td>" + Math.round(Math.PI * i**2) + "</td>" + "<td>" + Math.round(2 * Math.PI * i) + "</td>" + "</tr>";
        i += 0.3;
    }

    document.write(createdTable + "</table>");
}

function Task11() {
    let value0 = Number(prompt("Введите дробное число:"));
    let value1 = Number(prompt("Введите целое число:"));

    let createdTable = "<table border='1'>";
    createdTable += "<tr> <td> Число </td> <td> Метод </td> <td> Результат </td> <td> Описание метода </td> </tr>";

    for (let v = 0; v <= 1; v++) {
        let choisedValue = 0;
        switch (v) {
            case 0:
                choisedValue = value0; break;
            case 1:
                choisedValue = value1; break;
        }
        
        for (let i = 0; i < 4; i++) {
            createdTable += "<tr>";
            switch (i) {
                case 0:
                    createdTable += "<td>" + choisedValue + "</td>" + "<td> toString(16) </td>" + "<td>" + choisedValue.toString(16) + "</td>" 
                    + "<td> Строковое представление числа в 16-ричной системе счисления </td>";
                    break
                case 1:
                    createdTable += "<td>" + choisedValue + "</td>" + "<td> toExponential(2) </td>" + "<td>" + choisedValue.toExponential(2) + "</td>"
                    + "<td> Представляет указанное число в экспоненциальной форме, а после точки указывается два знака </td>";
                    break
                case 2:
                    createdTable += "<td>" + choisedValue + "</td>" + "<td> toPrecision(2) </td>" + "<td>" + choisedValue.toPrecision(2) + "</td>"
                    + "<td> Представляет число с заданным общим количеством значащих цифр, 2 означает, что первое целое и дробное число впишутся в это число </td>";
                    break
                case 3:
                    createdTable += "<td>" + choisedValue + "</td>" + "<td> toFixed(2) </td>" + "<td>" + choisedValue.toFixed(2) + "</td>"
                     + "<td> Представляет число в форме с фиксированным количеством цифр после запятой, 2 - сколько цифр после запятой следует указывать </td>";
                    break
            }
            createdTable += "</tr>";    
        }
    }

    document.write(createdTable + "</table>");
}