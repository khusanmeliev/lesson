// JavaScript Program to Print the Fibonacci Sequence

// -------------------------factorial--------------------

// const findFactorial = (num) => {
//   if (num === 1) {
//     return num;
//   } else {
//     return num * (num - 1);
//   }
// };

// console.log(findFactorial(5));

// const findFactorial = (num) => {
//   let result = num;
//   if (num == 0 || num == 1) return 1;

//   while (num > 1) {
//     num--;
//     result *= num;
//   }

//   return result;
// };
// console.log(findFactorial(5));

// const findFactorial = (num) => {
//   if (num == 0 || num == 1) return 1;

//   for (let i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// };

// console.log(findFactorial(5));

//  ------------------------------ Kilometers to Miles  -----------------

// const kmToMl = (kilometr) => {
//   const factor = 0.621371;
//   const miles = kilometr * factor;

//   return miles;
// };

// console.log(kmToMl(5.5));

// ------------------------------------Find the Largest-----------------

// const findLargest = (num1, num2, num3) => {
//   let largest;
//   if (num1 >= num2 && num1 >= 3) largest = num1;
//   else if (num2 >= num1 && num2 >= num3) largest = num2;
//   else {
//     largest = num3;
//   }
//   return largest;
// };
// console.log(findLargest(5, 6, 7));

// const findLargest = (num1, num2, num3) => {
//   const largest = Math.max(num1, num2, num3);

//   return largest;
// };
// console.log(findLargest(5, 6, 7));

// --------------Armstrong NUMBER --------

// const findArmstrong = (num) => {
//   let sum = 0;
//   let temp = num;

//   while (temp > 0) {
//     let remainder = temp % 10;

//     sum += remainder ** 3;

//     temp = parseInt(temp / 10);
//   }
//   if (sum == num) return true;
//   else return false;
// };

// console.log(findArmstrong(234));

// ---------------------------CONVERT DATE TO NUMBER--------------------

// const convertDtoN = () => {
//   let d1 = new Date();
//   let time = d1.getTime();

//   return time;
// };

// console.log(convertDtoN(212));

// ---------------------------CELCIUS TO FARENHEIT------------

// const findCelcius = (celcius) => {
//   let farenheit = celcius * 1.8 + 32;

//   return farenheit;
// };
// console.log(findCelcius(55));

// -------------------------------- replace characters---------

// const replaceCharacters = (str) => {
//   const newTxt = str.replace("meliev", "khusan");
//   return newTxt;
// };

// console.log(replaceCharacters("my name is meliev and surname is meliev"));

// -------------------validate an email adress-----------------

// const validateEmail = (email) => {
//   const regex =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (regex.test(email)) console.log("the email adress is valid");
//   else console.log("the email adress is invalid");
//   return regex;
// };

// validateEmail("khusanmeliev@gmail.com");

// --------------------------DUPLICATE ---------------

const duplicateNum = (arr) => {
  const result = [...new Set(arr)];
  return result;
};
console.log(duplicateNum([1, 2, 2, 3]));
