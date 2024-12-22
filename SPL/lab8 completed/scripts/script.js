"use strict"

let gettedText = document.getElementById("task1");
let gettedImage = document.getElementById("image1");
let gettedText2 = document.getElementById("task4");
let gettedImage2 = document.getElementById("image2");
let gettedText3 = document.getElementById("task5");

function MouseOutTask1() {
    let savedColor = gettedText.style.color;

    gettedText.addEventListener("mouseout", function() {
        gettedText.style.color = savedColor;
    })
}

function Task1() {
    gettedText.style.color = "rgb(255, 0, 0)";
}

function Task2() {
    gettedText.style.fontSize = "64px"
}

function Task3() {
    console.log(gettedImage.getAttribute("src"));
    if (gettedImage.getAttribute("src") == "images/cat1.png") {
        gettedImage.setAttribute("src", "images/dog1.png");
    }
    else {
        gettedImage.setAttribute("src", "images/cat1.png");
    }
}

function Task4() {
    if (gettedText2.tagName == "H2") {
        gettedText2.innerHTML = "<img src='images/cat1.png' style='width: 300px; height: 300px'>";  
    }
}

function MouseTask5() {
    gettedImage2.addEventListener("mouseenter", function(events) {
        console.log(events)
        gettedImage2.style.width = "500px";
        gettedImage2.style.height = "500px";
    })

    gettedImage2.addEventListener("mouseout", function() {
        gettedImage2.style.width = "300px";
        gettedImage2.style.height = "300px";
    })
}

function MouseTask6() {
    gettedText3.addEventListener("dblclick", function() {
        gettedText3.style.borderTop = "3px solid black";
        gettedText3.style.borderBottom = "3px dotted blue";
        gettedText3.style.borderLeft = "3px dashed red";
        gettedText3.style.borderRight = "6px solid orange";
    })
}

MouseOutTask1();
MouseTask5();
MouseTask6();