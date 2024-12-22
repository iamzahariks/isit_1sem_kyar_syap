"use strict"

function Task1() {
    let phoneBook = new Map();
    phoneBook.set("1", "+346");
    phoneBook.set("2", "+426");
    phoneBook.set("3", "+216");
    phoneBook.set("4", "+744");
    phoneBook.set("5", "+642");

    let phoneKey = prompt("Введите ключ для получения номера телефона");
    if (phoneBook.has(phoneKey)) {
        alert("Номер телефона: " + phoneBook.get(phoneKey));
    }
    else {
        alert("Данного ключа не существует!");
    }
}

function Task2() {
    let setBook = new Set();
    setBook.add(1); setBook.add(3); setBook.add(5);

    console.log("Размер Set: " + setBook.size);
    console.log("Есть ли элемент 1 в setBook: " + setBook.has(1));
    console.log("Есть ли элемент 3 в setBook: " + setBook.has(3));
    console.log("Есть ли элемент 5 в setBook: " + setBook.has(5));
    console.log("Есть ли элемент 7 в setBook: " + setBook.has(7));
    console.log("Возвращаемый тип: " + typeof setBook.has(1));
}

function Task3() {
    let proto = {
        name: "Zakhar",
        surname: "Pazniak",
        fatherName: "Sergeevich",

        writeInfo: function() {
            let createdP = document.createElement("p");
            createdP.style.fontSize = "24px";
            createdP.style.fontWeight = "Bold";
            createdP.textContent = this.name + " " + this.surname + " " + this.fatherName;
            document.body.appendChild(createdP);
        }
    };

    let proto2 = Object.create(proto);
    proto2.name = "Kiril";
    proto2.surname = "Klemyato";
    proto2.fatherName = "HzKto";
    proto2.writeInfo();
}

function Task4() {
    function hello(name = "Аноним") {
        alert("Привет, " + name);
    }

    let userName = prompt("Как тебя зовут?");
    if (userName === "") {userName = undefined};

    hello(userName);
}

let clickCounter = new Map();
function Task5() {
    let gettedButtons = document.getElementsByClassName("task5");

    function writeAllClicks() {
        let sum = 0;
        for (let arr of clickCounter) {sum += arr[1];}
        console.log("Сумма всех кликов: " + sum);
    }

    for (let i = 0; i < gettedButtons.length; i++) {
        let savedKey = String(i);
        clickCounter.set(savedKey, 0);

        gettedButtons[i].addEventListener("click", function() {
            clickCounter.set(savedKey, clickCounter.get(savedKey) + 1);
            gettedButtons[i].textContent = "Кол-во нажатий: " + clickCounter.get(savedKey)
            writeAllClicks()
        })
    }
}

Task5()