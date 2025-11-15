import { Shift, Program } from './enum.js'
import { GradeRecord } from './graderecords.js'
import { Logbook } from './logbook.js'
import { Student } from './student.js'
import { Teacther } from './teatcher.js'
import { Course } from './course.js'

// Professor(es):
const teacher1: Teacther = new Teacther(
    'Bruno',
    '1980B'
)

// Estudante(s):
const student1: Student = new Student(
    'Lourival Dantas',
    '20251001',
    new Date('2005-03-02')
)
const student2: Student = new Student(
    'Érica Brígida',
    '20251002',
    new Date('2005-01-10')
)
const student3: Student = new Student(
    'João Silva',
    '20251003',
    new Date('2004-06-28')
)
const student4: Student = new Student(
    'Maria José',
    '20251004',
    new Date('2005-03-02')
)
const student5: Student = new Student(
    'Inácio da Penha',
    '20251005',
    new Date('2005-03-02')
)


// Curso(s):
const course1: Course = new Course(
    120,
    'Programação Orientada a objetos'
)
course1.addTeachers(teacher1)

// Registro(s) de nota(s):
const student1GradeRecord: GradeRecord = new GradeRecord(
    student1
)
student1GradeRecord.addBimesterAverages(80, 90)
student1GradeRecord.calculateMidtermAverage()

const student2GradeRecord: GradeRecord = new GradeRecord(
    student2
)
student2GradeRecord.addBimesterAverages(100, 75)
student2GradeRecord.calculateMidtermAverage()

const student3GradeRecord: GradeRecord = new GradeRecord(
    student3
)
student3GradeRecord.addBimesterAverages(75, 80)
student3GradeRecord.calculateMidtermAverage()

const student4GradeRecord: GradeRecord = new GradeRecord(
    student4
)
student4GradeRecord.addBimesterAverages(55, 45)
student4GradeRecord.calculateMidtermAverage()
student4GradeRecord.calculateFinalAverage(75)

const student5GradeRecord: GradeRecord = new GradeRecord(
    student5
)
student5GradeRecord.addBimesterAverages(50, 40)
student5GradeRecord.calculateMidtermAverage()
student5GradeRecord.calculateFinalAverage(55)

// Diário(s):
const pooLogbook: Logbook = new Logbook(
    course1,
    Shift.AFTERNOON,
    Program.TSI,
    '1931'
)
pooLogbook.addTeacher(teacher1)
pooLogbook.addGradeRecord(student1GradeRecord)
pooLogbook.addGradeRecord(student2GradeRecord)
pooLogbook.addGradeRecord(student3GradeRecord)
pooLogbook.addGradeRecord(student4GradeRecord)
pooLogbook.addGradeRecord(student5GradeRecord)

console.log(pooLogbook.gradeRecords)