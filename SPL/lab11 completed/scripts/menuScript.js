"use strict"

$(document).ready(function() {
    $("#nav").mouseover(function(event) {
        let target = event.target;
        if (target.className !== 'menu-item') { return }
    
        closeMenu();
        let s = target.getElementsByClassName('submenu');
        s[0].style.display = 'block';
    })
    
    $(document).mouseover(function(event) {
        let target = event.target;
        if ((target.className !== 'menu-item') && (target.className !== 'submenu')) {
            closeMenu();
        }
    })

    function closeMenu() {
        let subm = $(".submenu");
        for (let i = 0; i < subm.length; i++) {
            subm[i].style.display = "none";
        }
    }
    
    closeMenu();
})