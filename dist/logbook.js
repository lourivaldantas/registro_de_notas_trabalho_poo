import { Course, Shift, Program } from './enum.js';
import { GradeRecord } from './graderecords.js';
export class Logbook {
    _course;
    _teacher;
    _shift;
    _program;
    _classCode;
    _gradeRecords;
    constructor(_course, _teacher, _shift, _program, _classCode, _gradeRecords = []) {
        this._course = _course;
        this._teacher = _teacher;
        this._shift = _shift;
        this._program = _program;
        this._classCode = _classCode;
        this._gradeRecords = _gradeRecords;
    }
    // Getters e Setters
    set course(value) { this._course = value; }
    get course() { return this._course; }
    set teacher(value) { this._teacher = value; }
    get teacher() { return this._teacher; }
    set shift(value) { this._shift = value; }
    get shift() { return this._shift; }
    set program(value) { this._program = value; }
    get program() { return this._program; }
    set classCode(value) { this._classCode = value; }
    get classCode() { return this._classCode; }
    // Grade Records
    addGradeRecord(record) {
        const exist = this._gradeRecords.some(student => student.studentId === record.studentId);
        if (exist)
            return false;
        this._gradeRecords.push(record);
        return true;
    }
    get gradeRecords() { return [...this._gradeRecords]; }
    findGradeRecordByStudentId(id) {
        return this._gradeRecords.find(student => student.studentId === id);
    }
}
