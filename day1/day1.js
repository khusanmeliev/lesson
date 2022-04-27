// 1. Return the number of vowels in a string
// const findWovels = (str) => {
//   let w = str.match(/[aeiu]/gi);
//   return w === null ? 0 : w.length;
// };
// console.log(findWovels("khusan"));

// 2. Remove the spaces found in a string

// function removeSpace(str) {
//   const remove = /\s/g;
//   return str.replace(remove, "");
// }
// console.log(removeSpace("hi my name is khusan"));

// 3. Create a function that filters out negative numbers

// const negativeNums = (nums) => {
//   let negative = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) negative.push(nums[i]);
//   }
//   return negative;
// };
// console.log(negativeNums([121, -32]));

// 4. Sort an array from lowest to highest

// const sortedNums = (nums) => {
//   let sorted = nums.sort((a, b) => a - b);
//   return sorted;
// };
// console.log(sortedNums([21, 21, 21, 4, 5]));

// 5. Calculate the sum of numbers within an array

// const sumOfNums = (nums) => {
//   const numbers = nums.reduce((a, b) => a + b, 0);
//   return numbers;
// };
// console.log(sumOfNums([212, 324, 7, 5, 3]));

//    with function

// const sumOfNums = (nums) => {
//   let numbers = 0;

//   for (let i = 0; i < nums.length; i++) {
//     numbers += nums[i];
//   }
//   return numbers;
// };
// console.log(sumOfNums([21, 43, 2, 5, 6]));


// this is day1 