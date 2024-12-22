"use strict"

let studentName = document.getElementById("studName");
let studentSurname = document.getElementById("surname");
let studentFatherName = document.getElementById("fathername");
let studentEmail = document.getElementById("email");
let studentPhone = document.getElementById("phone");

let studentVK = document.getElementById("vk");
let studentFacebook = document.getElementById("facebook");
let studentInstagram = document.getElementById("instagram");

let studentKurs = document.getElementById("kurs");
let studentFacultet = document.getElementById("fakultet");
let studentGroup = document.getElementById("group");

let info = document.getElementById("footerStudent");
function MakeInfo() {
    let studInfo = document.createElement("p");
    studInfo.textContent = studentName.value + " " + studentSurname.value + " " + studentFatherName.value + ", курс: " 
    + studentKurs.value + ", факультет: " + studentFacultet.value + ", группа: " + studentGroup.value;
    info.appendChild(studInfo);

    if (studentEmail.value !== "") {
        let studEmail = document.createElement("p");
        studEmail.textContent = studentEmail.value;
        info.appendChild(studEmail);
    }

    if (studentPhone.value !== "") {
        let studPhone = document.createElement("p");
        studPhone.textContent = studentPhone.value;
        info.appendChild(studPhone);
    }

    let studentWebsites = document.createElement("p");
    studentWebsites.textContent = "Использует следующие соц. сети:";
    if (studentVK.checked) { studentWebsites.textContent += " VK,"; }
    if (studentFacebook.checked) { studentWebsites.textContent += " Facebook,"; }
    if (studentInstagram.checked) { studentWebsites.textContent += " Instagram"; }
    info.appendChild(studentWebsites);
}

document.getElementById("sendButton").addEventListener("click", function() {
    MakeInfo()
})