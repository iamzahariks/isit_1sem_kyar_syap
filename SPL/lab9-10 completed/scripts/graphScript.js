"use strict"

let createButton = document.getElementById("buttonMakeGraph");
let graphChoice = document.forms[0].children[1].children[0];

let graphsFunctions = {
    "y=x^2": function(x) { return x**2 },
    "y=x^3": function(x) { return x**3 },
    "y=sin(x)": function(x) { return Math.sin(x) },
    "y=cos(x)": function(x) { return Math.cos(x) },
};

let colors = {
    "Чёрный": "rgb(0, 0, 0)",
    "Красный": "rgb(255, 0, 0)",
    "Зелёный": "rgb(0, 255, 0)",
}

function makeGraph() {
    // Создание блока с графиком

    let createdGraphBlock = document.createElement("div");
    createdGraphBlock.style.width = "700px";
    createdGraphBlock.style.height = "700px";
    createdGraphBlock.style.margin = "10px auto";

    createdGraphBlock.style.border = "5px solid black";
    createdGraphBlock.style.borderRadius = "50px";
    document.body.appendChild(createdGraphBlock);

    // Создание текста для блока графика
    let infoText = document.createElement("h2");
    infoText.textContent = "График вида: " + graphChoice.value;
    infoText.style.textAlign = "center";
    createdGraphBlock.appendChild(infoText)

    let infoText1 = document.createElement("p");
    infoText1.textContent = "Настройки графика:";
    infoText1.style.margin = "0 15px";
    infoText1.style.fontWeight = "bold";
    createdGraphBlock.appendChild(infoText1);

    // Настройки графика
    let colorChoiceText = document.createElement("p");
    colorChoiceText.textContent = "Цвет графика:";
    colorChoiceText.style.margin = "5px 25px";
    colorChoiceText.style.fontWeight = "bold";

    let colorChoice = document.createElement("select");
    let color1 = document.createElement("option"); color1.textContent = "Чёрный";
    let color2 = document.createElement("option"); color2.textContent = "Красный";
    let color3 = document.createElement("option"); color3.textContent = "Зелёный";

    colorChoice.appendChild(color1);
    colorChoice.appendChild(color2);
    colorChoice.appendChild(color3);

    colorChoiceText.appendChild(colorChoice);
    createdGraphBlock.appendChild(colorChoiceText);

    // Создание графического окна
    let graphDiv = document.createElement("div");
    graphDiv.style.width = "550px";
    graphDiv.style.height = "550px";
    graphDiv.style.margin = "15px auto";
    graphDiv.style.position = "relative";
    graphDiv.style.overflow = "hidden";

    graphDiv.style.border = "5px solid black";
    graphDiv.style.borderRadius = "50px";
    createdGraphBlock.appendChild(graphDiv);

    // Создание координатных оси X
    let lineX = document.createElement("div");
    lineX.style.backgroundColor = "rgb(0,0,0)";
    lineX.style.position = "absolute";
    lineX.style.width = "100%";
    lineX.style.height = "1px";
    lineX.style.top = "50%";
    lineX.style.left = "0%";
    graphDiv.appendChild(lineX);

    // Создание координатных оси Y
    let lineY = document.createElement("div");
    lineY.style.backgroundColor = "rgb(0,0,0)";
    lineY.style.position = "absolute";
    lineY.style.width = "1px";
    lineY.style.height = "100%";
    lineY.style.top = "0%";
    lineY.style.left = "50%";
    graphDiv.appendChild(lineY);

    // Создание точек в графике, пусть размер графического окна будет 50x50.
    let objects = [];
    for (let x = -50; x <= 50; x += 0.01) {
        let createdPoint = document.createElement("div");
        createdPoint.style.display = "inline-block";
        createdPoint.style.width = "1px";
        createdPoint.style.height = "1px";
        createdPoint.style.borderRadius = "100%";
        createdPoint.style.position = "absolute";
        createdPoint.style.zIndex = "10";
        createdPoint.style.backgroundColor = "rgb(0, 0, 0)";
        
        let y = graphsFunctions[graphChoice.value](x);
        createdPoint.style.top = 100 - (((y+50)/100) * 100) + "%";
        createdPoint.style.left = ((x+50)/100) * 100 + "%";

        graphDiv.appendChild(createdPoint);
        objects.push(createdPoint);
    }

    colorChoice.addEventListener("change", function() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].style.backgroundColor = colors[colorChoice.value];
        }
    })
}

function reset() {
    graphChoice.value = "y=x^2";
}

createButton.addEventListener("click", function() {
    makeGraph();
    reset();
})