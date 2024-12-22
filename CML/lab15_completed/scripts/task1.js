"use strict"

function Img1Enable() {
    let img1Div = document.getElementById("infoImg1");
    let img1 = document.getElementById("img1");

    img1.addEventListener("mousemove", function() {
        img1Div.style.visibility = "visible";
    })

    img1.addEventListener("mouseleave", function() {
        img1Div.style.visibility = "hidden";
    })

    img1Div.style.visibility = "hidden";
}

function Img2Enable() {
    let img2 = document.getElementById("img2");

    img2.addEventListener("click", function() {
        img2.style.border = "10px solid rgb(255, 0, 0)";
    })
}

function Img3Enable() {
    let img3 = document.getElementById("img3")
    let saved = img3.src; 

    img3.addEventListener("mousemove", function() {
        img3.src = "../imgs/apple.png"
    })

    img3.addEventListener("mouseleave", function() {
        img3.src = saved;
    })
}

Img1Enable()
Img2Enable()
Img3Enable()