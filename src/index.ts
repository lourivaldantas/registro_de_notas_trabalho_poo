class Logbook {
    constructor (
        private course: Course,
        private teacher: string,
        private shift: Shift,
        private program: Program,
        private classCode: string,
        private gradeRecords: GradeRecord[] = [],
    ) {}
    // Define a disciplina (Segue com set e get).
    setCourse(course: Course): void {
        this.course = course
    }
    getCourse(): Course {
        return this.course
    }

    // Define o professor (Segue com set e get).
    setTeacher(teacher: string): void {
        this.teacher = teacher
    }
    getTeacher(): string {
        return this.teacher
    }

    // Define o turno (Segue com set e get).
    setShift(shift: Shift): void {
        this.shift = shift
    }
    getShift(): Shift {
        return this.shift
    }

    // Define o curso (Segue com set e get).
    setProgram(program: Program): void {
        this.program = program
    }
    getProgram(): Program {
        return this.program
    }

    // Define o código da turma  (Segue com set e get).
    setClassCode(cc: string): void {
        this.classCode = cc
    }
    getClassCode(): string {
        return this.classCode
    }

    // Define o registro de notas (Segue com set e get).
    addGradeRecord(record: GradeRecord): boolean {
        const exist = this.gradeRecords.some(student => student.getStudentId() === record.getStudentId())
        if (exist) {
            return false
        }
        this.gradeRecords.push(record)
        return true    // Ver ponto 1 no fim do código.
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
    
    // Define nome do estudante (Segue com set e get).
    setStudentName(name: string): void {
        this.studentName = name
    }
    getStudentName(): string {
        return this.studentName
    }

    // Define a matrícula do estudante (Segue com set e get).
    setStudentId(id: string): void {
        this.studentId = id
    }
    getStudentId(): string {
        return this.studentId
    }

    // Adiciona as notas do primeiro e do segundo bimestre (Segue com set e get).
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

    // Calcula a média parcial com base nas notas do primeiro e segundo bimestre (Segue com set e get).
    setMidtermAverage(): void {
        if (this.bimesterAverages.length < 2) {
            return // Não faz nada.
        }
            // Garantido que bimesterAverages sempre terá 2 valores antes desta chamada.
            // O operador "!" é seguro aqui para evitar aviso de possível undefined.
        const b1: number = this.bimesterAverages[0]!
        const b2: number = this.bimesterAverages[1]!
        this.midtermAverage = (b1 * 2) + (b2 * 3) / 5
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
    TSI = 'Tecnologia em Sistemas para internet',
    TADS = 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    TRC = 'Tecnologia em Redes de Computadores',
    TAI = 'Tecnologia em Automação Industrial',
}

// PONTO 1:
// Método .some retorna um valor booleano. .some faz isso:
// let exist: boolean = false
// for (let i = 0; i < this.gradeRecord.length; i++) {
//     const student = this.gradeRecord[i]
//     if (student?.getStudentId() === record.getStudentId()) {
//         exist = true
//         break
//     }
// }
// if (!exist) {
//     this.gradeRecord.push(record)
//     return true
// }
// return false
// x => x é uma arrow funcition, ou seja, é uma função. arrow function faz isso:
// function (student) {
//  student.getStudentId() === record.getStudentId()
//  }