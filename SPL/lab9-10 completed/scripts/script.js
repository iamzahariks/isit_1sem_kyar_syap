'use strict'

function Task1() {
    let imageObject = document.getElementById("imageTask1");
    let imageClicked = false;
    
    imageObject.addEventListener("mousedown", function() {
        imageClicked = true;
    })

    imageObject.addEventListener("mouseup", function() {
        imageClicked = false;
    })

    let textObject = document.getElementById("textForTask1");
    let textClicked = false;

    textObject.addEventListener("mousedown", function() {
        textClicked = true;
    })

    textObject.addEventListener("mouseup", function() {
        textClicked = false;
    })

    document.addEventListener("mousemove", function(event) {
        if (imageClicked) {
            imageObject.style.left = (event.clientX - 150) + "px";
            imageObject.style.top = (event.clientY - 150) + "px";
        }

        if (textClicked) {
            textObject.style.left = (event.clientX - 60) + "px";
            textObject.style.top = (event.clientY - 25) + "px";
        }
    })
}

function Task2() {
    let imageObject = document.getElementById("imageTask2");
    let timer = 0;
    let side = "Right";

    function update() {
        timer = Math.min(timer + 1/144, 3);

        if (side === "Right") {
            imageObject.style.left = Math.round(1500 * (timer/3)) + "px";
        }
        else {
            imageObject.style.left = (1500 - Math.round(1500 * (timer/3))) + "px";
        }
    
        if (timer === 3) {
            timer = 0;
    
            if (side === "Right") {
                side = "Left";
            }
            else {
                side = "Right";
            }
        }
    }

    setInterval(update, 1/144);
}

function Task3() {
    let imageObject = document.getElementById("imageTask3");
    let degrees = 0;

    let startX = 800;
    let startY = 1200;

    let radius = 300;

    function update() {
        degrees += 0.01; degrees %= 360;
        imageObject.style.top = (startY + (radius*Math.sin(degrees))) + "px";
        imageObject.style.left = (startX - (radius*Math.cos(degrees))) + "px";
    }

    setInterval(update, 1/144);
}

Task1();
Task2();
Task3();