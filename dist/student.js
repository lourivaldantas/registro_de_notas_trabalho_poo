export class Student {
    _studentName;
    _studentId;
    _studentBirthday;
    constructor(_studentName, _studentId, _studentBirthday) {
        this._studentName = _studentName;
        this._studentId = _studentId;
        this._studentBirthday = _studentBirthday;
    }
    // Getters e Setters
    set studentName(value) { this._studentName = value; }
    get studentName() { return this._studentName; }
    set studentId(value) { this._studentId = value; }
    get studentId() { return this._studentId; }
    set studentBirthday(value) { this.studentBirthday = value; }
    get studentBirthday() {
        const birthday = this._studentBirthday;
        const day = birthday.getDate().toString().padStart(2, '0');
        const month = birthday.getMonth().toString().padStart(2, '0');
        const year = birthday.getFullYear().toString().padStart(2, '0');
        return `${day}/${month}/${year}`;
    }
}
