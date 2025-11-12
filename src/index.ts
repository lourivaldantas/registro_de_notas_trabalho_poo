class Logbook {
    constructor (
        private course: Course,
        private teacher: string,
        private shift: Shift,
        private program: Program,
        private classCode: string,
        private gradeRecords: GradeRecord[] = [],
    ) {}

    // Métodos:
    setCourse(course: Course): void {
        this.course = course
    }
    getCourse(): Course {
        return this.course
    }
    setTeacher(teacher: string): void {
        this.teacher = teacher
    }
    getTeacher(): string {
        return this.teacher
    }
    setShift(shift: Shift): void {
        this.shift = shift
    }
    getShift(): Shift {
        return this.shift
    }

    setProgram(program: Program): void {
        this.program = program
    }
    getProgram(): Program {
        return this.program
    }
    setClassCode(cc: string): void {
        this.classCode = cc
    }
    getClassCode(): string {
        return this.classCode
    }
    addGradeRecord(record: GradeRecord): boolean {
        const exist = this.gradeRecords.some(student => student.getStudentId() === record.getStudentId())
        if (exist) return false
        this.gradeRecords.push(record)
        return true    // Ver ponto 1 no README.md.
    }
    getGradeRecords(): GradeRecord[] {
        return this.gradeRecords
    }
}

class GradeRecord {
    constructor (
        private studentName: string,
        private studentId: string,
        private bimesterAverages: number[] = [],
        private midtermAverage: number = 0,
    ) {}
    
// Métodos:
    setStudentName(name: string): void {
        this.studentName = name
    }
    getStudentName(): string {
        return this.studentName
    }
    setStudentId(id: string): void {
        this.studentId = id
    }
    getStudentId(): string {
        return this.studentId
    }
    setBimesterAverages(b1: number, b2: number): boolean {
        if (b1 >= 0 && b1 <= 100 && b2 >= 0 && b2 <= 100) {
            this.bimesterAverages = [b1, b2]
            return true
        }
        return false
    }
    getBimesterAverages(): number[] {
        return this.bimesterAverages
    }
    calculateMidtermAverage(): void {
        if (this.bimesterAverages.length < 2) {
            return // Não faz nada.
        }
        const b1: number = this.bimesterAverages[0]! // Garantido que bimesterAverages sempre terá 2 valores antes desta chamada.
        const b2: number = this.bimesterAverages[1]! // O operador "!" é seguro aqui para evitar aviso de possível undefined.
        this.midtermAverage = ((b1 * 2) + (b2 * 3)) / 5
    }
    getMidtermAverage(): number {
        return this.midtermAverage
    }
}

enum Course {
    MATH = 'Matemática',
    PORT = 'Português',
    HIST = 'História',
    GEOG = 'Geografia',
    PHIL = 'Filosofia',
    SOC = 'Sociologia',
    ANTH = 'Antropologia',
    ETH = 'Ética',
    LOG = 'Lógica',
    BIO = 'Biologia',
    PHYS = 'Física',
    CHEM = 'Química',
    ENG = 'Inglês',
    CS = 'Informática',
}
enum Shift {
    MORNING = 'Matutino',
    AFTERNOON = 'Vespertino',
    EVENING = 'Noturno',
}
enum Program {
    TSI = 'Tecnologia em Sistemas para Internet',
    TADS = 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    TRC = 'Tecnologia em Redes de Computadores',
    TAI = 'Tecnologia em Automação Industrial',
}
