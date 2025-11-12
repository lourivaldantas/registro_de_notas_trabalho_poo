var Logbook = /** @class */ (function () {
    function Logbook(course, teacher, shift, program, classCode, gradeRecords) {
        if (gradeRecords === void 0) { gradeRecords = []; }
        this.course = course;
        this.teacher = teacher;
        this.shift = shift;
        this.program = program;
        this.classCode = classCode;
        this.gradeRecords = gradeRecords;
    }
    // Métodos:
    Logbook.prototype.setCourse = function (course) {
        this.course = course;
    };
    Logbook.prototype.getCourse = function () {
        return this.course;
    };
    Logbook.prototype.setTeacher = function (teacher) {
        this.teacher = teacher;
    };
    Logbook.prototype.getTeacher = function () {
        return this.teacher;
    };
    Logbook.prototype.setShift = function (shift) {
        this.shift = shift;
    };
    Logbook.prototype.getShift = function () {
        return this.shift;
    };
    Logbook.prototype.setProgram = function (program) {
        this.program = program;
    };
    Logbook.prototype.getProgram = function () {
        return this.program;
    };
    Logbook.prototype.setClassCode = function (cc) {
        this.classCode = cc;
    };
    Logbook.prototype.getClassCode = function () {
        return this.classCode;
    };
    Logbook.prototype.addGradeRecord = function (record) {
        var exist = this.gradeRecords.some(function (student) { return student.getStudentId() === record.getStudentId(); });
        if (exist)
            return false;
        this.gradeRecords.push(record);
        return true; // Ver ponto 1 no README.md.
    };
    Logbook.prototype.getGradeRecords = function () {
        return this.gradeRecords;
    };
    return Logbook;
}());
var GradeRecord = /** @class */ (function () {
    function GradeRecord(studentName, studentId, bimesterAverages, midtermAverage) {
        if (bimesterAverages === void 0) { bimesterAverages = []; }
        if (midtermAverage === void 0) { midtermAverage = 0; }
        this.studentName = studentName;
        this.studentId = studentId;
        this.bimesterAverages = bimesterAverages;
        this.midtermAverage = midtermAverage;
    }
    // Métodos:
    GradeRecord.prototype.setStudentName = function (name) {
        this.studentName = name;
    };
    GradeRecord.prototype.getStudentName = function () {
        return this.studentName;
    };
    GradeRecord.prototype.setStudentId = function (id) {
        this.studentId = id;
    };
    GradeRecord.prototype.getStudentId = function () {
        return this.studentId;
    };
    GradeRecord.prototype.setBimesterAverages = function (b1, b2) {
        if (b1 >= 0 && b1 <= 100 && b2 >= 0 && b2 <= 100) {
            this.bimesterAverages = [b1, b2];
            return true;
        }
        return false;
    };
    GradeRecord.prototype.getBimesterAverages = function () {
        return this.bimesterAverages;
    };
    GradeRecord.prototype.calculateMidtermAverage = function () {
        if (this.bimesterAverages.length < 2) {
            return; // Não faz nada.
        }
        var b1 = this.bimesterAverages[0]; // Garantido que bimesterAverages sempre terá 2 valores antes desta chamada.
        var b2 = this.bimesterAverages[1]; // O operador "!" é seguro aqui para evitar aviso de possível undefined.
        this.midtermAverage = ((b1 * 2) + (b2 * 3)) / 5;
    };
    GradeRecord.prototype.getMidtermAverage = function () {
        return this.midtermAverage;
    };
    return GradeRecord;
}());
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
