import { Teacther } from './teatcher.js';
export class Course {
    _workload;
    _courseName;
    _teachers;
    constructor(_workload, _courseName, _teachers = []) {
        this._workload = _workload;
        this._courseName = _courseName;
        this._teachers = _teachers;
    }
    addTeachers(teacher) { this._teachers.push(teacher); }
    get teachers() { return [...this._teachers]; }
    set workload(value) { this._workload = value; }
    get workload() { return this._workload; }
    set courseName(value) { this._courseName = value; }
    get courseName() { return this._courseName; }
}
