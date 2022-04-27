// ---------------------------COMPARE TWO ARRAY----------------------

// const compareArr = (arr1, arr2) => {
//   const result = JSON.stringify(arr1) == JSON.stringify(arr2);

//   if (result) {
//     console.log("teng ");
//   } else {
//     console.log("teng emas");
//   }
// };

// const array = [1, 2, 3, 4];
// const array2 = [1, 2, 3, 4];

// compareArr(array, array2);

// ------------------------------get random item-------------------

// const nums = [1, 2, 3, 82, 93, 27, 37, 453, 83];

// const random = Math.floor(Math.random() * nums.length);

// console.log(random);

// ------------------------REMOVE ITEM FROM AN ARRAY-----------------------

// const removeItem = (arr, num) => {
//   return arr.filter((item) => {
//     return item !== num;
//   });
// };
// console.log(removeItem([1, 2, 3, 4, 5], 1));

// ---------------------------------ADD KEY TO OBJECT------------------
// const person = {
//   name: "khusan",
//   description: "helo i am youn programmer",
// };

// person.age = 13;
// console.log(person);

// -----------------------------------Check if a Key Exists in an Object-----------------
// const person = {
//   name: "john",
//   age: 22,
// };

// console.log("age" in person);

// --------------------------------------INSERT AN ITEM ----------------------

// const insertAnItem = () => {
//   let array = [1, 2, 3, 4, 5];
//   let index = 3;
//   let element = 17;

//   array.splice(index, 0, element);
//   console.log(array);
// };
// insertAnItem();

// --------------------------------performIntersection---------------------

// const performIntersection = (arr1, arr2) => {
//   const setArr1 = new Set(arr1);
//   const setArr2 = new Set(arr2);

//   const result = [];

//   for (let i of setArr2) {
//     if (setArr1.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [1, 2, 4];

// console.log(performIntersection(array1, array2));

// --------------------------------------------getUniqueAfterMerge----------------------------
// const getUniqueAfterMerge = (arr1, arr2) => {
//   let arr = [...arr1, ...arr2];
//   let uniqueArr = [...new Set(arr)];

//   console.log(uniqueArr);
// };

// const array1 = [1, 2, 3, 5];
// const array2 = [1, 2, 4, 5];

// getUniqueAfterMerge(array1, array2);

// ----------------------------------------------Specified value --------------------
// const specifiedValue = (arr1, arr2) => {
//   if (arr1 == arr2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const array1 = [1, 2, 3];
// const array2 = [2, 3, 5];

// console.log(specifiedValue(array1, array2));

// -------------------------------------extract value -----------------------------
// const extractValue = (arr, prop) => {
//   const extractedValue = arr.map((item) => item[prop]);

//   return extractedValue;
// };
// const value = [
//   { a: 1, b: 2 },
//   { a: 4, b: 5 },
//   { a: 8, b: 9 },
// ];

// console.log(extractValue(value, "a"));
