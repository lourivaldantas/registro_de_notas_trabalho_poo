export class Student {
    constructor (
        private _studentName: string,
        private _studentId: string,
        private _studentBirthday: Date
    ) {}
    
    // Getters e Setters
    set studentName(value: string) { this._studentName = value }
    get studentName(): string { return this._studentName }

    set studentId(value: string) { this._studentId = value }
    get studentId(): string { return this._studentId }

    set studentBirthday(value: Date) { this.studentBirthday = value }
    get studentBirthday(): string {
        const birthday: Date = this._studentBirthday

        const day: string = birthday.getDate().toString().padStart(2, '0')
        const month: string = birthday.getMonth().toString().padStart(2, '0')
        const year: string = birthday.getFullYear().toString().padStart(2, '0')

        return `${day}/${month}/${year}`
    }
}
