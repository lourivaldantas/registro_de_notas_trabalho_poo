import { Teacther } from './teatcher.js'

export class Course {
    constructor (
        private _workload: number,
        private _courseName: string,
        private _teachers: Teacther[] = []

    ) {}
    
    addTeachers(teacher: Teacther) { this._teachers.push(teacher) }
    get teachers(): Teacther[] { return [...this._teachers] }

    set workload(value: number) { this._workload = value }
    get workload(): number { return this._workload }

    set courseName(value: string) { this._courseName = value }
    get courseName(): string { return this._courseName }
}