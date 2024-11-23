//* TASK 1
//* is 'else' required?
/*
The following function returns true if the parameter age is greater than 18.
Otherwise it asks for a confirmation and returns its result:
*/
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
/*
Will the function work differently if else is removed? 
my ans: NO
*/
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
/*
Is there any difference in the behavior of these two variants?
my ans: no difference
*/

//* TASK 2
//* Rewrite the function using '?' or '||'
/*
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.
*/
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
/*
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
*/

// using ternary (?)
function checkAge(age) {
  return (age > 18) ? true : confirm('Did your parents allow you?');
}
console.log(checkAge(16))

// using pipe characters (||)
function checkAge(age) {
  return (age > 18) || confirm('Did your parents allow you?')
}
console.log(checkAge(14))

//* TASK 3
//* Function min(a, b)
/*
  Write a function min(a,b) which returns the least of two numbers a and b.
  For instance:

  min(2, 5) == 2
  min(3, -1) == -1
  min(1, 1) == 1
 */
function min(a, b) {
  if (a > b){
    return b
  }else {
    return a
  }
}
console.log(min(2, 5))

//* TASK 4
//* Function pow(x,n)
/*
  Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

  pow(3, 2) = 3 * 3 = 9
  pow(3, 3) = 3 * 3 * 3 = 27
  pow(1, 100) = 1 * 1 * ...* 1 = 1

*/ 
function pow(x, n) {
  let result = (x ** n)
  return result
}
console.log(pow(5, 2)) // 25
/*
  Create a web-page that prompts for x and n, and then shows the result of pow(x,n)
*/
console.log(pow(prompt('Please input a number'), prompt('Please input an Exponent')))
// P.S. In this task the function should support only natural values of n: integers up from 1.

// attempt 2 - ensuring that the function should support only natural values of n: integers up from 1.

let x = prompt('please enter number')
let n = prompt('Please enter an exponent')

function pow(x, n) {
  if(n < 1){
    alert(`Error: ${n} is not supported, please use a positive exponent`)
  }else {
    let result = (x ** n)
    alert(result)
  }
}

console.log(pow(x, n))