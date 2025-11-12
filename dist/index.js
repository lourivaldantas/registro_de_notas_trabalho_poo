"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logbook {
    course;
    teacher;
    shift;
    program;
    classCode;
    gradeRecord;
    constructor(course, teacher, shift, program, classCode, gradeRecord = []) {
        this.course = course;
        this.teacher = teacher;
        this.shift = shift;
        this.program = program;
        this.classCode = classCode;
        this.gradeRecord = gradeRecord;
    }
    // Define a disciplina (Segue com set e get).
    setCourse(course) {
        this.course = course;
    }
    getCourse() {
        return this.course;
    }
    // Define o professor (Segue com set e get).
    setTeacher(teacher) {
        this.teacher = teacher;
    }
    getTeacher() {
        return this.teacher;
    }
    // Define o turno (Segue com set e get).
    setShift(shift) {
        this.shift = shift;
    }
    getShift() {
        return this.shift;
    }
    // Define o curso (Segue com set e get).
    setProgram(program) {
        this.program = program;
    }
    getProgram() {
        return this.program;
    }
    // Define o código da turma  (Segue com set e get).
    setClassCode(cc) {
        this.classCode = cc;
    }
    getClassCode() {
        return this.classCode;
    }
    // Define o registro de notas (Segue com set e get).
    setGradeRecords(record) {
        this.gradeRecord.push(record);
    }
    getGradeRecords() {
        return this.gradeRecord;
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
    // Define nome do estudante (Segue com set e get).
    setStudentName(name) {
        this.studentName = name;
    }
    getStudentName() {
        return this.studentName;
    }
    // Define a matrícula do estudante (Segue com set e get).
    setStudentId(id) {
        this.studentId = id;
    }
    getStudentId() {
        return this.studentId;
    }
    // Adiciona as notas do primeiro e do segundo bimestre (Segue com set e get).
    setBimesterAverages(b1, b2) {
        if (b1 < 0 || b1 > 100) {
            console.log(''); // CONTINUA: SE A NOTA FOR MENOR QUE 0 OU MAIOR QUE 100!!!!
        }
        this.bimesterAverages = [b1, b2];
    }
    getBimesterAverages() {
        return this.bimesterAverages;
    }
    // Calcula a média parcial com base nas notas do primeiro e segundo bimestre (Segue com set e get).
    setMidtermAverage() {
        if (this.bimesterAverages.length < 2) {
            console.log(`Informações incompletas para calcular a média de ${this.studentName}.`);
            return;
        }
        // Garantido que bimesterAverages sempre terá 2 valores antes desta chamada.
        // O operador "!" é seguro aqui para evitar aviso de possível undefined.
        const b1 = this.bimesterAverages[0];
        const b2 = this.bimesterAverages[1];
        this.midtermAverage = (b1 * 2 + b2 * 3) / 5;
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
    Program["TSI"] = "Tecnologia em Sistemas para internet";
    Program["TADS"] = "Tecnologia em An\u00E1lise e Desenvolvimento de Sistemas";
    Program["TRC"] = "Tecnologia em Redes de Computadores";
    Program["TAI"] = "Tecnologia em Automa\u00E7\u00E3o Industrial";
})(Program || (Program = {}));
