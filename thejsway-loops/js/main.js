//! CODING TIME
//* TASK 1 
//* Carousel
// Write a program that launches a carousel for 10 turns, showing the number each time.
// when it's done, improve it so that the number of turns is given by the user

//? while loop
// let carouselTurns = 1
// while (carouselTurns <= 10) {
//   console.log(carouselTurns ++) 
// }
//? while loop w/ improvement
// let carousel = 1
// let turns = prompt('How many times do you want the Carousel to turn?')
// while (carousel <= turns) {
//   console.log(carousel++)
// }
//? for loop
// for (i = 1; i <= 10; i ++){
//   console.log(i)
// }
//? for loop w/ improvement
// let turns = prompt('How many times would you like the Carousel to turn?')
// for (i = 1; i <= turns; i ++){
//   console.log(i)
// }

//* TASK 2
//* Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 100
// for (let i = 1; i  <= 10; i++) {
//   if ( i % 2 === 0){
//     console.log(`${i} is even`)
//   }
// }
// This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.
// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
// Improve the program so that it also shows odd numbers.

//? while loop
// let num = 0
// while (num <= 100){
//   if(num % 2 === 0){
//     console.log(`${num} is even`)
//   } else {
//     console.log(`${num} is odd`)
//   }
//   num++
// }

//? for loop
// for (i = 0; i <= 100; i++){
//   if(i % 2 === 0){
//     console.log(`${i} is even`)
//   }else {
//     console.log(`${i} is odd`)
//   }
// }

// Improve it again to replace the initial number 1 by a number given by the user.
//!info
// This program must show exactly 10 numbers including the first one, not 11 numbers!
//? while loop
// const startingNum = Number(prompt('Input a starting number'))
// let num = startingNum
// while(num < startingNum + 10){
//   if(num % 2 == 0){
//     console.log(`${num} is even`)
//   }else{
//     console.log(`${num} is odd`)
//   }
//   num++
// }

//? for loop
// const startingNum = Number(prompt('Input a starting number'))
// for(i = startingNum; i < startingNum + 10; i++){
//   if (i % 2 == 0){
//     console.log(`${i} is even`)
//   }else{
//     console.log(`${i} is odd`)
//   }
// }

//* TASK 3
//* Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
//? while loop
// num = Number(prompt('Input a number less than or equal to 100'))
// while(num > 100){
//   alert(`${num} is not less than or equal to 100, try again`)
//   num = Number(prompt('Input a number less than or equal to 100'))
// }

//? for loop ~ I can only do it with a function
// function lessThan100(){
//   let inputNumber = Number(prompt('Input a number less than or equal to 100'))
//   for(num = inputNumber; num > 100; lessThan100()){
//     alert(`${num} is not less than or equal to 100`)
//   };
// }
// lessThan100()

// when you are done with the above, improve the program so that the terminating number is between 50 and 100.
//? while
// //peusdo code 
// // ask user for number
// let num = Number(prompt('please input a number between 50 and 100'))
// // calculate if number is between 50 - 100
// while(num > 100 || num < 50){
//   alert(`${num} is not between 50 and 100`)
//   // if NOT ask for another number
//   num = Number(prompt('please input a number between 50 and 100'))
// }
// // if yes, end loop

//? for (not quite working how i want...)
function between50And100(){
  let inputNumber = Number(prompt('Please input a number between 50 and 100'))
  for(num = inputNumber; num > 100 || num < 50; between50And100()){
    alert(`${num} is not between 50 and 100`)
    num = Number(prompt('Please input a number between 50 and 100'))
  }
}
between50And100()