'use strict'

$(document).ready(function() {
    function Task1() {
        let imageObject = $("#imageTask1"); let textObject = $("#textForTask1");
        let imageClicked = false; let textClicked = false;
        
        imageObject.mousedown(function() {
            imageClicked = true;
        });
    
        imageObject.mouseup(function() {
            imageClicked = false;
        });
    
        textObject.mousedown(function() {
            textClicked = true;
        });
    
        textObject.mouseup(function() {
            textClicked = false;
        });

        $(document).mousemove(function(event) {
            if (imageClicked) {
                imageObject.css("left", (event.clientX - 150) + "px");
                imageObject.css("top", (event.clientY - 150) + "px");
            }
    
            if (textClicked) {
                textObject.css("left", (event.clientX - 60) + "px");
                textObject.css("top", (event.clientY - 25) + "px");
            }
        })
    }
    
    function Task2() {
        let imageObject = $("#imageTask2");

        {imageObject.animate({left: 1500}, 3000).animate({left: 0}, 3000);}
        setInterval(function() {imageObject.animate({left: 1500}, 3000).animate({left: 0}, 3000);}, 6000);
    }
    
    function Task3() {
        let imageObject = $("#imageTask3");
        let degrees = 0; let startX = 800; let startY = 1200; let radius = 300;
    
        function update() {
            degrees += 0.01; degrees %= 360;
            imageObject.css("top", (startY + (radius*Math.sin(degrees))) + "px");
            imageObject.css("left", (startX - (radius*Math.cos(degrees))) + "px");
        }
    
        setInterval(update, 1/144);
    }
    
    Task1();
    Task2();
    Task3();
})