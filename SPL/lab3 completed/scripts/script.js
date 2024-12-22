"use strict"

function Task1() {
    let createdArray = [];
    createdArray.push(6 - Math.PI**2 + 3 * Math.E**8);
    createdArray.push(2 * Math.cos(4) + Math.cos(12) + 8 - Math.E**3);
    createdArray.push(3 * Math.sin(9) + Math.log(5) + createdArray[0] + createdArray[1]);
    createdArray.push(2 * Math.tan(5) + 6 - Math.PI + createdArray[1] * createdArray[2]);

    let _maxValue, _maxIndex, _minValue, _minIndex;
    for (let i = 0; i < createdArray.length; i++) {
        if ((_maxValue == undefined) || (_maxValue < createdArray[i])) {
            _maxValue = createdArray[i];
            _maxIndex = i;
        }

        if ((_minValue == undefined) || (_minValue > createdArray[i])) {
            _minValue = createdArray[i];
            _minIndex = i;
        }
    }

    console.log(createdArray);
    console.log("Макс. элемент массива:" + _maxValue + ", индекс: " + _maxIndex);
    console.log("Мин. элемент массива:" + _minValue + ", индекс: " + _minIndex);
}

function Task3() {
    let array1 = Array.from([1, 2, 3], function(x) {return x + x * x});
    let array2 = Array.of(4, 5, 2, true, null, "Hello World!", undefined, 14, [4, 2, 3], function Test() {4, 3, 2});

    console.log(array1);
    console.log(array2);
}

function Task4() {
    let globalArray = ["pow", "pop", "push", "shift", "round", "floor", "sline", "sort"];
    let arrayFunctions = [];
    let mathFunctions = [];

    for (let i = 0; i < globalArray.length; i++) {
        if (Math[globalArray[i]]) {
            mathFunctions.push(globalArray[i]);
        }

        if (arrayFunctions[globalArray[i]]) {
            arrayFunctions.push(globalArray[i]);
        }
    }

    arrayFunctions.push("find");
    mathFunctions.push("ceil");

    console.log(arrayFunctions, "Длина: " + arrayFunctions.length);
    console.log(mathFunctions, "Длина: " + mathFunctions.length);
}

function Task5() {
    let myName = "Pozniak Zakhar Sergeevich";

    console.log("Длина строки моего имени: " + myName.length);
    let createdNewString = myName.toUpperCase() + " " + myName.toLowerCase();
    console.log(createdNewString);

    console.log(myName.split(" "));
    console.log(myName.split(""));

    myName = "PZS";
}

function Task6() {
    let arrayFunctions = ["getFullYear", "getMonth", "getDate", "getHours", "getMinutes", "getSeconds"];
    let funcRusNames = ["Год", "Месяц", "День", "Час", "Минуты", "Секунды"];

    let dateObject = new Date();
    let createdTable = document.createElement("table");

    for (let i = 0; i < arrayFunctions.length; i++) {
        let createdStr = document.createElement("tr");

        let createdTab1 = document.createElement("td");
        createdTab1.textContent = funcRusNames[i];
        createdStr.appendChild(createdTab1);

        let createdTab2 = document.createElement("td");
        let gettedValue = dateObject[arrayFunctions[i]]();
        if (arrayFunctions[i] == "getMonth") {gettedValue += 1;}

        createdTab2.textContent = gettedValue;
        createdStr.appendChild(createdTab2);

        createdTable.appendChild(createdStr);
    }

   document.body.appendChild(createdTable);
}