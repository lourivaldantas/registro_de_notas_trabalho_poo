export class Teacther {
    _teacherName;
    _teacherId;
    constructor(_teacherName, _teacherId) {
        this._teacherName = _teacherName;
        this._teacherId = _teacherId;
    }
    set teacherName(value) { this._teacherName = value; }
    get teacherName() { return this._teacherName; }
    set teacherId(value) { this._teacherId = value; }
    get teacherId() { return this._teacherId; }
}
