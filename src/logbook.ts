import { Shift, Program } from './enum.js'
import { Course } from './course.js'
import { GradeRecord } from './graderecords.js'
import{ Teacther } from './teatcher.js'

export class Logbook {
    constructor(
        private _course: Course,
        private _shift: Shift,
        private _program: Program,
        private _classCode: string,
        private _teacher?: Teacther,
        private _gradeRecords: GradeRecord[] = []
    ) {}

    // Getters e Setters
    set course(value: Course) { this._course = value}
    get course(): Course { return this._course }

    get teacher(): Teacther { return this._teacher! }

    set shift(value: Shift) { this._shift = value }
    get shift(): Shift { return this._shift }

    set program(value: Program) { this._program = value }
    get program(): Program { return this._program }

    set classCode(value: string) { this._classCode = value }
    get classCode(): string { return this._classCode }

    // Grade Records
    addGradeRecord(record: GradeRecord): boolean {
        const exist = this._gradeRecords.some(stdnt => stdnt.student.studentId === record.student.studentId)
        
        if (exist) return false
        this._gradeRecords.push(record)
        return true
    }

    get gradeRecords(): GradeRecord[] { return [...this._gradeRecords] }

    findGradeRecordByStudentId(id: string) {
        return this._gradeRecords.find(student => student.student.studentId === id)
    }

    addTeacher(tchr: Teacther) {
        const exist = this._course.teachers.some(prof => prof.teacherId === tchr.teacherId)

        if (exist) return false
        this._teacher = tchr
        return true
    }
}
