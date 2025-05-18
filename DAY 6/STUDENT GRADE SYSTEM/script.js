
// 4. Practice: Student Grade System

// Problems:
// 	1.	Create a student object with name, marks (array of numbers).
// 	2.	Add a method calculateAverage() to compute the average mark.
// 	3.	Add a method getGrade() to return:
// 	•	"A" if average >= 90
// 	•	"B" if average >= 75
// 	•	"C" if average >= 60
// 	•	"F" otherwise

let student ={
  name :"jatin",
  marks : [20,40,50,60,90,99],

   calculateAverage: function () {
    let sum = 0;
    for (let mark of this.marks) {
      sum += mark;
    }
    return sum / this.marks.length;
  },



    getGrade: function () {
    let avg = this.calculateAverage();
    if (avg >= 90) {
      return "A";
    } else if (avg >= 75) {
      return "B";
    } else if (avg >= 60) {
      return "C";
    } else {
      return "F";
    }
  }
}


console.log("Average:", student.calculateAverage()); 
console.log("Grade:", student.getGrade()); 