    import { Course, Shift, Program } from './enum.js'
    import { GradeRecord } from './graderecords.js'

    export class Logbook {
        constructor(
            private _course: Course,
            private _teacher: string,
            private _shift: Shift,
            private _program: Program,
            private _classCode: string,
            private _gradeRecords: GradeRecord[] = []
        ) {}

        // Getters e Setters
        set course(value: Course) { this._course = value}
        get course(): Course { return this._course }

        set teacher(value: string) { this._teacher = value }
        get teacher(): string { return this._teacher }

        set shift(value: Shift) { this._shift = value }
        get shift(): Shift { return this._shift }

        set program(value: Program) { this._program = value }
        get program(): Program { return this._program }

        set classCode(value: string) { this._classCode = value }
        get classCode(): string { return this._classCode }

        // Grade Records
        addGradeRecord(record: GradeRecord): boolean {
            const exist = this._gradeRecords.some(student => student.studentId === record.studentId)
            
            if (exist) return false
            this._gradeRecords.push(record)
            return true
        }

        get gradeRecords(): GradeRecord[] { return [...this._gradeRecords] }

        findGradeRecordByStudentId(id: string) {
            return this._gradeRecords.find(student => student.studentId === id)
        }
    }
