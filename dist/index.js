import { Course, Shift, Program, Status } from './enum.js';
import { GradeRecord } from './graderecords.js';
import { Logbook } from './logbook.js';
// Estudantes
const student1 = new GradeRecord('Lourival', '20251148060028');
student1.addBimesterAverages(90, 95);
student1.calculateMidtermAverage();
const student2 = new GradeRecord('João', '20251158060027');
student2.addBimesterAverages(85, 90);
student2.calculateMidtermAverage();
const student3 = new GradeRecord('Maria', '20251168060026');
student3.addBimesterAverages(80, 85);
student3.calculateMidtermAverage();
const student4 = new GradeRecord('José', '20251178060025');
student4.addBimesterAverages(55, 45);
student4.calculateMidtermAverage();
student4.calculateFinalAverage(75);
const student5 = new GradeRecord('André', '20251188060024');
student5.addBimesterAverages(50, 40);
student5.calculateMidtermAverage();
student5.calculateFinalAverage(55);
// Diário
const histLogbook = new Logbook(Course.HIST, 'prof. Jalmenio da Silva', Shift.AFTERNOON, Program.TSI, '0051');
histLogbook.addGradeRecord(student1);
histLogbook.addGradeRecord(student2);
histLogbook.addGradeRecord(student3);
histLogbook.addGradeRecord(student4);
histLogbook.addGradeRecord(student5);
// Saída no terminal
console.log(histLogbook.gradeRecords);
