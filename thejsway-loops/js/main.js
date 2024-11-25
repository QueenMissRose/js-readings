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
for (let i = 1; i  <= 10; i++) {
  if ( i % 2 === 0){
    console.log(`${i} is even`)
  }
}
// This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.
console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
// Improve the program so that it also shows odd numbers.


// Improve it again to replace the initial number 1 by a number given by the user.

//!info
// This program must show exactly 10 numbers including the first one, not 11 numbers!