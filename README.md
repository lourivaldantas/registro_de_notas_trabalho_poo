# registro_de_notas_trabalho_poo

// PONTO 1:
// Método .some retorna um valor booleano. Na prática, faz isto:
// let exist: boolean = false
// for (let i = 0; i < this.gradeRecord.length; i++) {
//     const student = this.gradeRecord[i]
//     if (student?.getStudentId() === record.getStudentId()) {
//         exist = true
//         break
//     }
// }
// if (!exist) {
//     this.gradeRecord.push(record)
//     return true
// }
// return false
// "x => x" é uma arrow funcition, ou seja, é uma função interna. Na prática, arrow function faz isto:
// function (student) {
//  student.getStudentId() === record.getStudentId()
//  }