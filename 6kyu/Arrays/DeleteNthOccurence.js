"use strict";
// const player1 = {
//   firstName: "Marc",
//   lastName: "Smith",
//   age: 20,
//   gender: "male",

//   printInfo() {
//     console.log(
//       `Hello, this is ${this.firstName} ${this.lastname}. I am ${this.age} years old and i am a ${this.gender}`
//     );
//   },
// };

// const increment = function () {
//   let counter = 0;

//   function innerFunction() {
//     counter++;
//     return counter;
//   }
// };

// const incrementNumber = increment();
// console.log(incrementNumber()); //1
// console.log(incrementNumber()); //2
// console.log(incrementNumber()); //3

let x;

const y = function () {
  let counter = 10;

  x = function () {
    counter += 2;
    console.log(counter);
  };
};

y();
x(); //12
x(); //14

const z = function () {
  let counter = 20;

  x = function () {
    counter += 3;
    console.log(counter);
  };
};

z();
x(); //23
