"use strict"

function Task1() {
    console.log("Задание 1");

    for (let i = 0; i < document.all.length; i++) {
        console.log("Имя тэга: " + document.all[i].tagName + " и его номер в коллекции: " + i);
    }
}

function Task2() {
    console.log("Задание 2");
    for (let i = 0; i < document.body.childNodes.length; i++) {
        console.log("Имя тэга: " + document.body.childNodes[i].nodeName + " и его номер: " + i);
    }
}

function Task3() {
    console.log("Задание 3");

    for (let i = 0; i < document.all.length; i++) {
        if (document.all[i].tagName == "SPAN") {
            console.log(document.all[i].textContent);
            break;
        }
    }

    console.log(document.body.getElementsByTagName("span")[0].textContent);
    console.log(document.getElementById("idForTask3").textContent);
}

function Task4() {
    console.log("Задание 4");

    let scoreTable = document.body.getElementsByTagName("table")[1];
    console.log(scoreTable);
    
    let averageScore = 0;
    for (let i = 1; i < scoreTable.tBodies[0].children.length; i++) { 
        console.log(scoreTable.tBodies[0].children[i].children[1]);
        averageScore += parseInt(scoreTable.tBodies[0].children[i].children[1].textContent);
    }

    averageScore /= (scoreTable.tBodies[0].children.length - 1);
    averageScore = Math.floor(averageScore * 100) / 100;

    console.log("Мой средний балл: " + averageScore);
    document.body.getElementsByTagName("span")[1].textContent += " А так же мой средний балл: " + averageScore;
    document.body.getElementsByTagName("span")[1].style = "color: blue; font-size: 24px";
}

Task1();
Task2();
Task3();
Task4();