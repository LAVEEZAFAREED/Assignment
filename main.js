"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Assignment 1:Building your friend list.
let people = {
    friends: []
};
let friend1 = {
    firstName: "Arshmah",
    lastName: "Shahid",
    id: 1
};
let friend2 = {
    firstName: "Alishba",
    lastName: "Usman",
    id: 2
};
let friend3 = {
    firstName: "Mehwish",
    lastName: "Riaz",
};
people.friends.push(friend1, friend2, friend3);
console.log([people]);
//Assignment 2:Manipulating an Array:Rearranging words
const scrambledArray = ["student", "of", "true", "123", "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 3);
scrambledArray.splice(2, 3, "student", "of");
scrambledArray.splice(4, 0, "GIAIC");
scrambledArray.splice(2, 0, "a");
console.log(scrambledArray.join(" "));
let inventory = {
    product: []
};
let productA = {
    name: "shirt",
    colour: "black",
    cost: 600,
    quantity: 300
};
let productB = {
    name: "pant",
    colour: "white",
    cost: 1200,
    quantity: 400
};
let productC = {
    name: "coat",
    colour: "brown",
    cost: 2000,
    quantity: 200
};
inventory.product.push(productA);
inventory.product.push(productB);
inventory.product.push(productC);
console.log(inventory.product[2].quantity);
let productD = {
    name: "watch",
    colour: "black",
    cost: 2500,
    quantity: 200
};
inventory.product.push(productD);
console.log(inventory.product[3]);
console.log(inventory.product[3].quantity);
console.log(inventory);
;
let students = [
    {
        name: "Arshmah",
        seniors: false,
        completedAssignment: true
    },
    {
        name: "Alishba",
        seniors: true,
        completedAssignment: false
    },
    {
        name: "Laraib",
        seniors: true,
        completedAssignment: true,
    },
    {
        name: "Ayzel",
        seniors: false,
        completedAssignment: false
    },
];
function FindSeniorStudentWithAssignment(students) {
    return students.filter(student => student.completedAssignment);
}
;
console.log("This is a students list.");
console.log(students);
console.log("This is a list of those students whose completed their assignment");
let SeniorStudentWithAssignment = FindSeniorStudentWithAssignment(students);
console.log(SeniorStudentWithAssignment);
function RemovedStudentNotCompletedAssignment(student) {
    return student.filter(student => student.seniors && !student.completedAssignment);
}
;
let UpdatedStudentList = RemovedStudentNotCompletedAssignment(students);
console.log("students those not completed their assignments");
