"use strict"

let data;

function UpdateInfo() {
    let nickname = document.getElementById("nickname");
    let email = document.getElementById("email");
    let money = document.getElementById("money");

    nickname.value = data.name;
    email.value = data.email;
    money.innerHTML = money.innerText.replace(money.innerText.match(/\d+/g)[0], data.money);
}

let functions = [
    UpdateInfo,
    
    function() {
        let nickname = document.getElementById("nickname");
        let email = document.getElementById("email");

        nickname.addEventListener("change", function() {
            data.name = nickname.value;
            SaveData();
        })

        email.addEventListener("change", function() {
            data.email = email.value;
            SaveData();
        })
    },

    function() {
        let minigamesButton = document.getElementById("minigames");
        let minigamesMenu = document.getElementById("menu-games");

        minigamesButton.addEventListener("mouseenter", function() {
            minigamesMenu.style.visibility = "visible";
        })

        minigamesButton.addEventListener("mouseleave", function() {
            minigamesMenu.style.visibility = "hidden";
        })

        minigamesMenu.style.visibility = "hidden";
    },

    function() {
        let giveMoney = document.getElementById("giveMoney");
        giveMoney.addEventListener("mousedown", function() {
            data.money += 10;
            UpdateInfo();
            SaveData();
        })
    }
];

function WebSiteLoaded() {
    if (document.cookie.length == 0) {
        data = {name: "Zakhar", email: "Zakhar@gmail.com", money: 100};
        SaveData()
    }
    else {
        console.log(document.cookie.length)
        data = JSON.parse(document.cookie);
    }

    for (let func of Object.values(functions)) {
        func();
    }
}

function SaveData() {
    document.cookie = JSON.stringify(data);
}

WebSiteLoaded();