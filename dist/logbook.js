import { Shift, Program } from './enum.js';
import { Course } from './course.js';
import { GradeRecord } from './graderecords.js';
import { Teacther } from './teatcher.js';
export class Logbook {
    _course;
    _shift;
    _program;
    _classCode;
    _teacher;
    _gradeRecords;
    constructor(_course, _shift, _program, _classCode, _teacher, _gradeRecords = []) {
        this._course = _course;
        this._shift = _shift;
        this._program = _program;
        this._classCode = _classCode;
        this._teacher = _teacher;
        this._gradeRecords = _gradeRecords;
    }
    // Getters e Setters
    set course(value) { this._course = value; }
    get course() { return this._course; }
    get teacher() { return this._teacher; }
    set shift(value) { this._shift = value; }
    get shift() { return this._shift; }
    set program(value) { this._program = value; }
    get program() { return this._program; }
    set classCode(value) { this._classCode = value; }
    get classCode() { return this._classCode; }
    // Grade Records
    addGradeRecord(record) {
        const exist = this._gradeRecords.some(stdnt => stdnt.student.studentId === record.student.studentId);
        if (exist)
            return false;
        this._gradeRecords.push(record);
        return true;
    }
    get gradeRecords() { return [...this._gradeRecords]; }
    findGradeRecordByStudentId(id) {
        return this._gradeRecords.find(student => student.student.studentId === id);
    }
    addTeacher(tchr) {
        const exist = this._course.teachers.some(prof => prof.teacherId === tchr.teacherId);
        if (exist)
            return false;
        this._teacher = tchr;
        return true;
    }
}
