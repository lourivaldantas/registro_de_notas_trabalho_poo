"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logbook {
    course;
    teacher;
    shift;
    program;
    classCode;
    gradeRecords;
    constructor(course, teacher, shift, program, classCode, gradeRecords = []) {
        this.course = course;
        this.teacher = teacher;
        this.shift = shift;
        this.program = program;
        this.classCode = classCode;
        this.gradeRecords = gradeRecords;
    }
    // Métodos:
    setCourse(course) {
        this.course = course;
    }
    getCourse() {
        return this.course;
    }
    setTeacher(teacher) {
        this.teacher = teacher;
    }
    getTeacher() {
        return this.teacher;
    }
    setShift(shift) {
        this.shift = shift;
    }
    getShift() {
        return this.shift;
    }
    setProgram(program) {
        this.program = program;
    }
    getProgram() {
        return this.program;
    }
    setClassCode(cc) {
        this.classCode = cc;
    }
    getClassCode() {
        return this.classCode;
    }
    addGradeRecord(record) {
        const exist = this.gradeRecords.some(student => student.getStudentId() === record.getStudentId());
        if (exist)
            return false;
        this.gradeRecords.push(record);
        return true; // Ver ponto 1 no README.md.
    }
    getGradeRecords() {
        return this.gradeRecords;
    }
}
class GradeRecord {
    studentName;
    studentId;
    bimesterAverages;
    midtermAverage;
    constructor(studentName, studentId, bimesterAverages = [], midtermAverage = 0) {
        this.studentName = studentName;
        this.studentId = studentId;
        this.bimesterAverages = bimesterAverages;
        this.midtermAverage = midtermAverage;
    }
    // Métodos:
    setStudentName(name) {
        this.studentName = name;
    }
    getStudentName() {
        return this.studentName;
    }
    setStudentId(id) {
        this.studentId = id;
    }
    getStudentId() {
        return this.studentId;
    }
    setBimesterAverages(b1, b2) {
        if (b1 >= 0 && b1 <= 100 && b2 >= 0 && b2 <= 100) {
            this.bimesterAverages = [b1, b2];
            return true;
        }
        return false;
    }
    getBimesterAverages() {
        return this.bimesterAverages;
    }
    calculateMidtermAverage() {
        if (this.bimesterAverages.length < 2) {
            return; // Não faz nada.
        }
        const b1 = this.bimesterAverages[0]; // Garantido que bimesterAverages sempre terá 2 valores antes desta chamada.
        const b2 = this.bimesterAverages[1]; // O operador "!" é seguro aqui para evitar aviso de possível undefined.
        this.midtermAverage = ((b1 * 2) + (b2 * 3)) / 5;
    }
    getMidtermAverage() {
        return this.midtermAverage;
    }
}
var Course;
(function (Course) {
    Course["MATH"] = "Matem\u00E1tica";
    Course["PORT"] = "Portugu\u00EAs";
    Course["HIST"] = "Hist\u00F3ria";
    Course["GEOG"] = "Geografia";
    Course["PHIL"] = "Filosofia";
    Course["SOC"] = "Sociologia";
    Course["ANTH"] = "Antropologia";
    Course["ETH"] = "\u00C9tica";
    Course["LOG"] = "L\u00F3gica";
    Course["BIO"] = "Biologia";
    Course["PHYS"] = "F\u00EDsica";
    Course["CHEM"] = "Qu\u00EDmica";
    Course["ENG"] = "Ingl\u00EAs";
    Course["CS"] = "Inform\u00E1tica";
})(Course || (Course = {}));
var Shift;
(function (Shift) {
    Shift["MORNING"] = "Matutino";
    Shift["AFTERNOON"] = "Vespertino";
    Shift["EVENING"] = "Noturno";
})(Shift || (Shift = {}));
var Program;
(function (Program) {
    Program["TSI"] = "Tecnologia em Sistemas para Internet";
    Program["TADS"] = "Tecnologia em An\u00E1lise e Desenvolvimento de Sistemas";
    Program["TRC"] = "Tecnologia em Redes de Computadores";
    Program["TAI"] = "Tecnologia em Automa\u00E7\u00E3o Industrial";
})(Program || (Program = {}));
