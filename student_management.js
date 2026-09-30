/*
Create a Student Management System using constructor functions and prototypes.
You must create a Student constructor that accepts:

* name
* age
* course
* score

Your system must allow you to:

1. Create at least 3 students.
2. Add a prototype method introduce() that displays the student's information.
3. Add a prototype method getResult() that returns Pass if the score is 50 or above and Fail otherwise.
4. Add a prototype method updateScore(newScore) that changes the student's score.
5. Add a prototype method getGrade() that returns:

   * `A` → 80–100
   * `B` → 70–79
   * `C` → 60–69
   * `D` → 50–59
   * `F` → below 50
6. Find the student with the highest score.
7. Find the student with the lowest score.
8. Calculate the **average score*of all students.
9. Prove that introduce(), getResult(), and getGrade() are stored on Student.prototype and not directly inside each student object.
10. Use getPrototypeOf() to prove that the students share the same prototype.
*/


function Student(name, age, course, score){
    this.name = name,
    this.age = age,
    this.course = course,
    this.score = score
}

Student.prototype.introduce = function(){
    return `Hi! am ${this.name}, and am ${this.age} year's old, i study ${this.course}`
}

Student.prototype.getResult = function(){
    return this.score >= 50 && this.score <=100 ? "Pass" : "Fail"
};

Student.prototype.updataScore = function(newScore){
    this.score = newScore
    return this.score
};

Student.prototype.getGrade = function(){
    if (this.score >= 80 && this.score <= 100){
        return "A"
    } else if (this.score >= 70){
        return "B"
    } else if (this.score >= 60){
        return "C"
    } else if (this.score >= 50){
        return "D"
    }  else if (this.score < 50){
        return "F"
    } else {
        return "invaild"
    }
};

const student1 = new Student;

student1.name = "Max";
student1.age = 21;
student1.course = "Compter Science";
student1.score = 80;

const student2 = new Student;

student2.name = "Mac";
student2.age = 22;
student2.course = "Compter Science";
student2.score = 10;

const student3 = new Student;

student3.name = "Jerry";
student3.age = 24;
student3.course = "Compter Science";
student3.score = 40;

const students = [student1, student2, student3]

const highest = students.reduce((max, s) => (s.score > max.score ? s : max));

const lowest = students.reduce((min, s) => (s.score < min.score ? s : min))

const average = students.reduce((sum, s) => sum + s.score, 0) / students.length

console.log(student1.introduce())
console.log(student1.getGrade())
console.log(student1.updataScore(90))
console.log(student1.getResult())


console.log(student1.hasOwnProperty("introduce"))
console.log(student1.hasOwnProperty("getResult"))
console.log(student1.hasOwnProperty("getGrade"))

console.log(Student.prototype.hasOwnProperty("introduce"))
console.log(Student.prototype.hasOwnProperty("getResult"))
console.log(Student.prototype.hasOwnProperty("getGrade"))


console.log(Object.getPrototypeOf(student1) === Object.getPrototypeOf(student2))

console.log(highest.name, highest.score)
console.log(lowest.name, lowest.score)
console.log(average)