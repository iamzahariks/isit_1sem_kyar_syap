"use strict"

let windowsIndex = 0;
function Task1() {
    let newWindow = window.open();
    newWindow.document.title = "Page" + windowsIndex;

    let createdTagH2 = document.createElement("h2");
    createdTagH2.textContent = "Настройки страницы" + windowsIndex + ": ";
    document.body.appendChild(createdTagH2);

    let createdButtonPrint = document.createElement("button");
    createdButtonPrint.textContent = "Напечать название окна в документе!";
    createdButtonPrint.style.display = "inline-block";
    document.body.appendChild(createdButtonPrint);

    createdButtonPrint.onclick = function() {
        let createdNewText = document.createElement("p");
        createdNewText.textContent = "Название страницы называется: " + newWindow.document.title;
        newWindow.document.body.appendChild(createdNewText);
    }

    let createdButtonClose = document.createElement("button");
    createdButtonClose.textContent = "Закрыть окно!";
    createdButtonClose.style.margin = "0px 0px 0px 15px"
    createdButtonClose.style.display = "inline-block";
    document.body.appendChild(createdButtonClose);

    createdButtonClose.onclick = function() {
        newWindow.close()
    }

    newWindow.addEventListener("beforeunload", function(){
        document.body.removeChild(createdTagH2);
        document.body.removeChild(createdButtonPrint);
        document.body.removeChild(createdButtonClose);
    });

    windowsIndex++;
}

function Task2() {
    let properties = ["navigator.userAgent", "navigator.appVersion", "navigator.appName", "navigator.appCodeName", "navigator.platform", "navigator.javaEnabled",
        "screen.width & screen.height", "screen.colorDepth", "history.length", "location.href", "location.pathname", "location.host"
    ];
    let values = [navigator.userAgent, navigator.appVersion, navigator.appName, navigator.appCodeName, navigator.platform, navigator.javaEnabled(),
        screen.width + " " + screen.height, screen.colorDepth, history.length, location.href, location.pathname, location.host
    ];

    let createdTable = document.createElement("table");
    createdTable.style = "margin-top: 20px; border: 1px solid black"

    let rootLine = document.createElement("tr");
    createdTable.appendChild(rootLine);

    let tab1 = document.createElement("td");
    tab1.textContent = "Свойство";
    tab1.style = "width: 200px; height: 50px; text-align: center; border: 1px solid black"
    rootLine.appendChild(tab1);

    let tab2 = document.createElement("td");
    tab2.textContent = "Значение";
    tab2.style = "width: 200px; height: 50px; text-align: center; border: 1px solid black"
    rootLine.appendChild(tab2);

    for (let i = 0; i < properties.length; i++) {
        let line = document.createElement("tr");

        let createdTab1 = document.createElement("td");
        createdTab1.textContent = properties[i];
        createdTab1.style = "width: 200px; height: 50px; text-align: center; border: 1px solid black"
        line.appendChild(createdTab1);

        let createdTab2 = document.createElement("td");
        createdTab2.textContent = values[i];
        createdTab2.style = "width: 200px; height: 50px; text-align: center; border: 1px solid black"
        line.appendChild(createdTab2);

        createdTable.appendChild(line);
    }

    document.body.appendChild(createdTable);
}