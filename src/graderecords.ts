import { Status } from './enum.js'

export class GradeRecord {
    constructor(
        private _studentName: string,
        private _studentId: string,
        private _bimesterAverages: number[] = [],
        private _midtermAverage?: number,
        private _status: Status = Status.ENROLLED,
        private _finalAverage?: number
    ) {}

    // Getters e Setters
    set studentName(value: string) { this._studentName = value }
    get studentName(): string { return this._studentName }

    set studentId(value: string) { this._studentId = value }
    get studentId(): string { return this._studentId }

    addBimesterAverages(b1: number, b2: number): boolean {
        const valid = [b1, b2].every(n => Number.isFinite(n) && n >= 0 && n <= 100)

        if (!valid) return false
        this._bimesterAverages = [b1, b2]
        return true
    }

    get bimesterAverages(): number[] { return [...this._bimesterAverages] }

    // Cálculos de médias
    calculateMidtermAverage(): void {
        if (this._bimesterAverages.length < 2) {
            return
        }

        const b1 = this._bimesterAverages[0]!
        const b2 = this._bimesterAverages[1]!
        this._midtermAverage = Math.round((b1 * 2 + b2 * 3) / 5)

        if (this._midtermAverage >= 60) {
            this._status = Status.PASSED
            this._finalAverage = this._midtermAverage
        } else if (this._midtermAverage <= 10) {
            this._status = Status.FAILED
            this._finalAverage = this._midtermAverage
        } else {
            this._status = Status.FINALEXAM
        }
    }

    get midtermAverage(): number | undefined { return this._midtermAverage }
    get status(): Status { return this._status }

    calculateFinalAverage(finalexam: number): void {
        if (this._status === Status.FINALEXAM && this._midtermAverage != null) {
            this._finalAverage = Math.round((this._midtermAverage + finalexam) / 2)
            this._status = (this._finalAverage >= 60) ? Status.PASSED : Status.FAILED
        }
    }

    get finalAverage(): number | undefined { return this._finalAverage }
}
