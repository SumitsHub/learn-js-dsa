/**
 * function to find factorial of input number using recursion
 *
 * factorial of number 'n' is multiplication of numbers from 1 to n
 * n! = n * (n-1) * (n-2) * ... * 1
 * 4! = 4 * 3 * 2 * 1 = 24
 *
 * @input n: number
 * @output factorial of number
 */
function factorial(n) {
  // base case -> to stop the recursion
  if (n === 0) return 1;
  // recursive case -> function calling itself
  return n * factorial(n - 1);
}

factorial(4);
