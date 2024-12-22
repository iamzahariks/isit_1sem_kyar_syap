"use strict"

let graphsFunctions = {
    "y=x^2": function (x) { return x ** 2 },
    "y=x^3": function (x) { return x ** 3 },
    "y=sin(x)": function (x) { return Math.sin(x) },
    "y=cos(x)": function (x) { return Math.cos(x) },
};

let colors = {
    "Чёрный": "rgb(0, 0, 0)",
    "Красный": "rgb(255, 0, 0)",
    "Зелёный": "rgb(0, 255, 0)",
};

$(document).ready(function () {
    let createButton = $("#buttonMakeGraph");
    let graphChoice = $("#selectId")[0];

    function makeGraph() {
        // Создание блока с графиком

        let createdGraphBlock = $("<div>").css({"width":"700px", "height":"700px", "margin":"10px auto", "border":"5px solid black", "borderRadius":"50px"});
        $(document.body).append(createdGraphBlock);

        // Создание текста для блока графика
        let infoText = $("<h2>").css({"textAlign":"center"}).text("График вида: " + graphChoice.value);
        createdGraphBlock.append(infoText);

        let infoText1 = $("<p>").css({"margin":"0 15px", "fontWeight":"bold"}).text("Настройки графика:");
        createdGraphBlock.append(infoText1);

        // Настройки графика
        let colorChoiceText = $("<p>").css({"margin":"5px 25px", "fontWeight":"bold"}).text("Цвет графика:");
        createdGraphBlock.append(colorChoiceText);

        let colorChoice = $("<select>");
        let color1 = $("<option>").text("Чёрный"); let color2 = $("<option>").text("Красный"); let color3 = $("<option>").text("Зелёный");
        colorChoice.append(color1); colorChoice.append(color2); colorChoice.append(color3);

        colorChoiceText.append(colorChoice);
        createdGraphBlock.append(colorChoiceText);

        // Создание графического окна
        let graphDiv = $("<div>").css({"width":"550px","height":"550px","margin":"15px auto","position":"relative",
            "overflow":"hidden","border":"5px solid black", borderRadius:"50px"});
        createdGraphBlock.append(graphDiv);

        // Создание координатных оси X
        let lineX = $("<div>").css({"backgroundColor":"rgb(0,0,0)", "position":"absolute", "width":"100%", "height":"1px", "top":"50%", "left":"0%"});
        graphDiv.append(lineX);

        // Создание координатных оси Y
        let lineY = $("<div>").css({"backgroundColor":"rgb(0,0,0)", "position":"absolute", "width":"1px", "height":"100%", "top":"0%", "left":"50%"});
        graphDiv.append(lineY);

        // Создание точек в графике, пусть размер графического окна будет 50x50.
        let objects = [];
        for (let x = -50; x <= 50; x += 0.01) {
            let y = graphsFunctions[graphChoice.value](x);

            let createdPoint = $("<div>").css({"display":"inline-block", "width":"1px","height":"1px","borderRadius":"100%","position":"absolute",
                "zIndex":"10","backgroundColor":"rgb(0,0,0)", "top":100 - (((y + 50) / 100) * 100) + "%", "left":((x + 50) / 100) * 100 + "%"});
            
            graphDiv.append(createdPoint);
            objects.push(createdPoint);
        }

        colorChoice.change(function() {
            for (let i = 0; i < objects.length; i++) {
                objects[i].css({"backgroundColor":colors[colorChoice[0].value]});
            }
        });
    }

    function reset() {
        graphChoice.value = "y=x^2";
    }

    createButton.click(function () {
        makeGraph();
        reset();
    })
});