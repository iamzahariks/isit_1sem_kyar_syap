"use strict"

function Reset() {
    let gettedForm = document.forms[0];
    gettedForm.studentName.value = "";
    gettedForm.studentSurname.value = "";

    gettedForm.selectSpeciality.value = "ИСиТ";

    if (gettedForm.kurs.value.length !== 0) {
        gettedForm.kurs[parseInt(gettedForm.kurs.value) - 1].checked = false;
    }

    gettedForm.OIT.checked = false;
    gettedForm.OAP.checked = false;
    gettedForm.History.checked = false;
    gettedForm.Physics.checked = false;
    gettedForm.Math.checked = false;
}

function Write() {
    let gettedForm = document.forms[0];
    let createdDiv = document.createElement("div");
    createdDiv.style = "width: 500px; margin: auto";

    let infoText = document.createElement("p");
    infoText.textContent = "Студент " + gettedForm.studentSurname.value + " специальность " + gettedForm.selectSpeciality.value + " курс " + gettedForm.kurs.value +
    " должен сдавать следующие предметы: ";
    createdDiv.appendChild(infoText);

    let createdList = document.createElement("ul");
    createdDiv.appendChild(createdList);

    let listOfExams = [gettedForm.OIT, gettedForm.OAP, gettedForm.History, gettedForm.Physics, gettedForm.Math];
    for (let i = 0; i < listOfExams.length; i++) {
        let exam = listOfExams[i];
        if (!exam.checked) { continue; }

        let punkt = document.createElement("li");
        punkt.textContent = exam.attributes.rusname.value;
        createdList.appendChild(punkt);
    }

    document.body.appendChild(createdDiv);
    CreateForm();
}

function CreateForm() {
    let gettedForm = document.forms[0];
    let createdNewForm = document.createElement("form");

    let fieldSetForm = document.createElement("fieldset");
    fieldSetForm.style = "width: 500px; margin: auto"
    createdNewForm.appendChild(fieldSetForm);

    let paragraphText1 = document.createElement("p");
    paragraphText1.textContent = "Такие предметы сдаёт " + gettedForm.studentSurname.value + ".";
    fieldSetForm.appendChild(paragraphText1);

    let paragraphText2 = document.createElement("p");
    paragraphText2.textContent = "Где его завалим?";
    fieldSetForm.appendChild(paragraphText2);

    let listOfExams = [gettedForm.OIT, gettedForm.OAP, gettedForm.History, gettedForm.Physics, gettedForm.Math];

    let selectTag = document.createElement("select");
    selectTag.name = "examList";
    fieldSetForm.appendChild(selectTag);

    for (let i = 0; i < listOfExams.length; i++) {
        let exam = listOfExams[i];
        if (!exam.checked) { continue; }

        let createdOption = document.createElement("option");
        createdOption.textContent = exam.attributes.rusname.value;
        selectTag.appendChild(createdOption);
    }

    document.body.append(createdNewForm);
}