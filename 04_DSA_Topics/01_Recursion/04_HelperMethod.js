/**
 *
 * @param {*} arr -input array of numbers
 * @returns - array containing odd numbers
 */
function collectOddValues(arr) {
  let result = [];

  // helper function to check if 1st number is odd then call again with remaining array
  function helper(inpArr) {
    if (inpArr.length === 0) return;

    if (inpArr[0] % 2 !== 0) result.push(inpArr[0]);

    helper(inpArr.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 9, 7])); // [1,3,5,9,7]
