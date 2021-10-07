// function Student(name, gender, age) {
//   this.name = name,
//   this.gender = gender,
//   this.age = age
// }

// Student.prototype.setSubject = function (subjectName) {
//   this.subject = subjectName;
// }

// Student.prototype.addMark = function (mark) {
//   if (this.marks === undefined) {
//     this.marks = [];
//   }
//   this.marks.push(mark);
// }
// Student.prototype.addMarks = function (...mark) {
//   if (this.marks === undefined) {
//     this.marks = [];
//   }
//   this.marks.push(...mark);
// }

// Student.prototype.getAverage = function () {
//   let sum = this.marks.reduce((total, amount) => total + amount);
//   return (sum / this.marks.length);
// }

// Student.prototype.exclude = function (reason) {
//   delete this.subject;
//   delete this.marks;
//   this.excluded = reason;
// }

let array = [20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240, 20480,  40960]


function reallySumm(arr){
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

let s = reallySumm(array)
console.log(s);