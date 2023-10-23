/**
 * function to print numbers from n to 1 using iterative approach
 *
 * @param {*} n - number of counts
 * @returns
 */

// function countDown(n) {
//   for (let i = n; i > 0; i--) {
//     console.log(i);
//   }
// }

// countDown(5);

/**
 * function to print numbers from n to 1 using recursion approach
 *
 * @param {*} n - number of counts
 * @returns
 */
function countDown(n) {
  // Base case - to stop the recursion
  if (n === 0) {
    return;
  }
  console.log(n--);
  // calling function itself - recursion
  countDown(n);
}

countDown(5);
