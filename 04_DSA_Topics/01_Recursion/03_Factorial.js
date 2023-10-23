/**
 * function to find factorial recursively
 *
 * @param {*} n - input number to find factorial of
 * @returns - factorial of input number
 */
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(6)); // 720
