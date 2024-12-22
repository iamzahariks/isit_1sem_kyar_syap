"use strict"

function add_stud(k) {
    this.count += k;
}   

function sub_stud(k) {
    this.count -= k;
}

function Task1() {
    let gr2 = {count: 30, add_stud, sub_stud};
    gr2.add_stud(4);
    gr2.sub_stud(13);

    let gr3 = {count: 30, add_stud, sub_stud};
    gr3.add_stud(3);
    gr3.sub_stud(15);

    let gr4 = {count: 30, add_stud, sub_stud};
    gr4.add_stud(4);
    gr4.sub_stud(3);
    
    let log1 = document.createElement("p");
    log1.textContent = "Во 2 группе: " + gr2.count + " студентов";
    document.body.append(log1);

    let log2 = document.createElement("p");
    log2.textContent = "В 3 группе: " + gr3.count + " студентов";
    document.body.append(log2);
    
    let log3 = document.createElement("p");
    log3.textContent = "В 4 группе: " + gr4.count + " студентов";
    document.body.append(log3);
}

function Student(name, surname, physicsScore, mathScore, informaticScore) { // Конструктор Student
    this.name = name;
    this.surname = surname;

    this.physicsScore = physicsScore;
    this.mathScore = mathScore;
    this.informaticScore = informaticScore;

    this.iq = Math.round(Math.random() * 50 + 90);

    this.printNS = () => {
        let info = document.createElement("p");
        info.textContent = "Я - " + this.name + " " + this.surname;
        document.body.appendChild(info);
    }

    this.averageScore = () => {
        let info = document.createElement("p");
        info.textContent = "Средний балл: " + (Math.round((this.physicsScore + this.mathScore + this.informaticScore)/3 * 100) / 100);
        document.body.appendChild(info);
    }

    this.teach = function() {
        let info = document.createElement("p");
        this.iq += Math.ceil(Math.random() * 5);
        info.textContent = "Я, " + this.name + " " + this.surname + ", прочитал книжку! Теперь мой IQ: " + this.iq;
        document.body.appendChild(info);
    }
}

function Task2() {
    let _me = new Student("Zakhar", "Poznyak", 9, 9, 10);
    _me.printNS();
    _me.averageScore();

    let _stud1 = new Student("Maksim", "Abromov", 7, 10, 7);
    _stud1.printNS();
    _stud1.averageScore();

    let _stud2 = new Student("Egor", "Kondoba", 5, 10, 10);
    _stud2.printNS(); 
    _stud2.averageScore();

    let _stud3 = new Student("Aleksey", "Mishin", 9, 2, 4);
    _stud3.printNS(); 
    _stud3.averageScore();

    for (let i = 0; i < 3; i++) {
        _stud3.teach();
    }
}

function Task3() {
    let createdArray = [4, 3, 2, 1, 0];

    console.log(createdArray);
    delete createdArray[3];
    console.log(createdArray);

    console.log(2 in createdArray, "name" in Student, "iq" in {count: 30, add_stud, sub_stud});
    console.log(Student instanceof Array, Student instanceof String, Student instanceof Object);

    let myTestFunction = () => {
        return 5;
    }

    console.log(String.apply instanceof String)

    console.log(typeof myTestFunction, typeof Student, typeof {count: 30, add_stud, sub_stud}, typeof new Student("Zakhar", "Pozniak", 5, 4, 3));
}