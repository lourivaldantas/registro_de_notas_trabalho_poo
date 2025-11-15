import { Student } from './student.js';
import { Status } from './enum.js';
export class GradeRecord {
    _student;
    _bimesterAverages;
    _midtermAverage;
    _status;
    _finalAverage;
    constructor(_student, _bimesterAverages = [], _midtermAverage, _status = Status.ENROLLED, _finalAverage) {
        this._student = _student;
        this._bimesterAverages = _bimesterAverages;
        this._midtermAverage = _midtermAverage;
        this._status = _status;
        this._finalAverage = _finalAverage;
    }
    addBimesterAverages(b1, b2) {
        const valid = [b1, b2].every(n => Number.isFinite(n) && n >= 0 && n <= 100);
        if (!valid)
            return false;
        this._bimesterAverages = [b1, b2];
        return true;
    }
    get bimesterAverages() { return [...this._bimesterAverages]; }
    // Cálculos de médias
    calculateMidtermAverage() {
        if (this._bimesterAverages.length < 2)
            return;
        const b1 = this._bimesterAverages[0];
        const b2 = this._bimesterAverages[1];
        if (b1 == null || b2 == null)
            return;
        this._midtermAverage = Math.round((b1 * 2 + b2 * 3) / 5);
        if (this._midtermAverage >= 60) {
            this._status = Status.PASSED;
            this._finalAverage = undefined;
        }
        else if (this._midtermAverage <= 10) {
            this._status = Status.FAILED;
            this._finalAverage = this._midtermAverage;
        }
        else {
            this._status = Status.FINALEXAM;
        }
    }
    get midtermAverage() { return this._midtermAverage; }
    get status() { return this._status; }
    calculateFinalAverage(finalexam) {
        if (this._status === Status.FINALEXAM && this._midtermAverage != null) {
            this._finalAverage = Math.round((this._midtermAverage + finalexam) / 2);
            this._status = (this._finalAverage >= 60) ? Status.PASSED : Status.FAILED;
        }
    }
    get finalAverage() { return this._finalAverage; }
    get student() { return this._student; }
}
