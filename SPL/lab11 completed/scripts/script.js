"use strict"

$(document).ready(function() {
    $("#task1").mouseenter(function(){$("#task1").css("color", "rgb(255, 0, 0)")});
    $("#task1").click(function(){$("#task1").css("fontSize", "64px")});

    $("#image1").click(function(){
        if ($("#image1").attr("src") == "images/cat1.png") {
            $("#image1").attr("src", "images/dog1.png")
        }
        else {
            $("#image1").attr("src", "images/cat1.png")
        }
    });

    $("#task4").click(function(){
        console.log("test")
        $("#task4").replaceWith("<img src='images/cat1.png' style='width: 300px; height: 300px'>");
    });

    $("#image2").mouseenter(function() {
        $("#image2").css("width", "500px").css("height", "500px");
    });

    $("#image2").mouseleave(function() {
        $("#image2").css("width", "300px").css("height", "300px");
    });

    $("#task5").dblclick(function() {
        $("#task5").css("borderTop", "3px solid black").css("borderBottom", "3px dotted blue").css("borderLeft", "3px dashed red").css("borderRight", "6px solid orange");
    });
})