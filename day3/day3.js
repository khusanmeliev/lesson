// --------------------------------Check if a number is positive, negativem or zero

// const checkPNZ = (num) => {
//   if (num < 0) {
//     return console.log("negative");
//   } else if (num > 0) {
//     return console.log("poasitive");
//   } else {
//     return console.log("zero");
//   }
// };

// checkPNZ(0);

// ------------------------Check prime number --------------------

// const checkPrime = (num) => {
//   let isPrime = true;

//   if (num === 1) {
//     console.log("neither");
//   } else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log("prime number");
//     } else {
//       console.log("not prime");
//     }
//   } else {
//     console.log("nothing to compare");
//   }
// };

// checkPrime(5);

// -----------------------------CONVERT OBJECTS TO STRING-------------
// const dog = {
//   name: "rudi",
//   age: 2,
//   city: "new york 😁😁",
// };

// const str = JSON.stringify(dog);
// console.log(str);

// -------------------------------------LOOP THROUGH AN OBJECT-------------

// const person = {
//   name: "khusan",
//   age: 13,
//   description: "helo i am young programmer",
// };

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(key + " - " + person[key]);
//   }
// }

// const person = {
//   name: "khusan",
//   age: 13,
//   description: "helo i am young programmer",
// };

// for (let key of Object.keys(person)) {
//   console.log(key + " - " + person[key]);
// }

// --------------------------------MERGE PROPERTY OF TWO OBJECT------------------

// const person_name = {
//   name: "khusan",
// };
// const person_age = {
//   age: 13,
// };

// const merge = Object.assign(person_name, person_age);

// const merge2 = { ...person_name, ...person_age };

// console.log(merge);

// ---------------------------------REMOVE PROPERTY FROM AN OBJECT---------------------

// const dog = {
//   name: "rudi",
//   age: 2,
//   description: "i am a dog",
//   numOfLegs: 3,
// };

// delete dog.numOfLegs;

// console.log(dog);

// ---------------------------------------CREATE AN OBJECT IN DIFFERENT WAYS------------

// const dog = {
//   name: "khasan",
//   age: 2,
// };

// console.log(dog);

// const dog = new Object({
//   name: "rudi",
//   age: 2,
// });

// console.log(dog);

// function Dog() {
//   (this.name = "khusan"), (this.age = 2);
// }

// const dog = new Dog();
// console.log(dog);

// -------------------------------CLONE A JS OBJECT----------------------

// let person = {
//   name: "khusan",
//   age: 13,
// };

// let person2 = { ...person };

// person2.name = "noone";

// console.log(person);
// console.log(person2);

