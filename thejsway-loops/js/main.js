//! CODING TIME
// Try to code each exercise twice, once with a while loop an the other a for loop, to see for yourself which one is the most appropriate.
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
// function between50And100(){
//   let inputNumber = Number(prompt('Please input a number between 50 and 100'))
//   for(num = inputNumber; num > 100 || num < 50; between50And100()){
//     alert(`${num} is not between 50 and 100`)
//     num = Number(prompt('Please input a number between 50 and 100'))
//   }
// }
// between50And100()

//* TASK 4
//* Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.
//? while
// const multiplicationNumber = Number(prompt('Please input a number you would like to mulitply'))
// let i = 0
// while (i <= 12){
//   console.log(`${multiplicationNumber} * ${i} = ${multiplicationNumber * i}`)
//   i++
// }

//? for
// const multiplicationNumber = Number(prompt('Please input multiplication number'))
// for(i = 0; i <= 12; i++){
//   console.log(`${multiplicationNumber} * ${i} = ${multiplicationNumber * i}`)
// }

// When you are done, improve the program so it only accepts numbers between 2 and 9
//? while
// let multiplicationNumber = Number(prompt('Please enter a multiplication number'))
// let i = 0
// while(i <= 12){
//   if (multiplicationNumber > 9 || multiplicationNumber < 2){
//     alert(`${multiplicationNumber} is not between 2 and 9`)
//     multiplicationNumber = Number(prompt('Please enter a multiplication number'))
//   }else{
//     console.log(`${multiplicationNumber} * ${i} = ${multiplicationNumber * i}`)
//     i++
//   }
// }

//? for
// let multiplicationNumber = Number(prompt('Please input a number to be multiplied'))
// for (i = 0; i <= 12; i++){
//   if( multiplicationNumber > 9 || multiplicationNumber < 2){
//     alert(`${multiplicationNumber} is not between 2 and 9`)
//     multiplicationNumber = Number(prompt('Please input a number to be multiplied'))
//   }else {
//     console.log(`${multiplicationNumber} * ${i} = ${multiplicationNumber * i}`)
//   }
// }

//* TASK 5
//* Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

//? while
// let word 
// while(word !== 'yes' && word !== 'no'){
//   word = prompt('Please enter a word').toLowerCase()
//   if(word !== "yes" && word !== "no"){
//   alert(`${word} is Neither yes, nor no`)
//   }else {
//     alert('Success!')
//   }
// }

//? for
// let word
// for(/* no initialisation */;word !== "yes" && word !== "no"; /* no expression */){
//   word = prompt('please enter a word').toLowerCase()
//   if(word !== "yes" && word !== "no"){
//     alert(`${word} is Neither yes, nor no`)
//   }else {
//     alert('Success!')
//   }
// }

//* TASK 6
//* FizzBuzz
/* Write a program that shows all numbers between 1 and 100 with the following exceptions:
1/ it shows "Fizz" instead if the number is divisible by 3.
2/ it shows "Buzz" instead if the number is divisible by 5 and NOT 3 */
//? while
// log numbers 1 - 100
// let num = 1
// while(num <= 100){
//   if(num % 3 == 0){
//     console.log('Fizz')
//   }else if(num % 5 == 0){
//     console.log('Buzz')
//   }else{
//     console.log(num)
//   }
//   num++
// }

//? for
// for(num = 1; num <= 100; num++){
//   if(num % 3 == 0){
//     console.log('Fizz')
//   }else if(num % 5 == 0){
//     console.log('Buzz')
//   }else {
//     console.log(num)
//   }
// }

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5. 
//? while
// let num = 1
// while(num <= 100){
//   if(num % 15 == 0){
//     console.log('FizzBuzz')
//   }else if(num % 3 == 0){
//     console.log('Fizz')
//   }else if(num % 5 == 0){
//     console.log('Buzz')
//   }else {
//     console.log(num)
//   }
//   num++
// }

//? for
// for(num = 1; num <= 100; num++){
//   if(num % 15 == 0){
//     console.log('FizzBuzz')
//   }else if(num % 3 == 0){
//     console.log('Fizz')
//   }else if(num % 5 == 0){
//     console.log('Buzz')
//   }else {
//     console.log(num)
//   }
// }