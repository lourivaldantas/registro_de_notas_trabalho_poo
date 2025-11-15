export class Teacther {
    constructor (
        private _teacherName: string,
        private _teacherId: string
    ) {}

        set teacherName(value: string) { this._teacherName = value }
        get teacherName(): string { return this._teacherName }

        set teacherId(value: string) { this._teacherId = value }
        get teacherId(): string { return this._teacherId }   
}
