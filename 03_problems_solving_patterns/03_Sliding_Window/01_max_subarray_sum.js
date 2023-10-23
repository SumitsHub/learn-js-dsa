/**
 *
 * @param {*} arr - input array
 * @param {*} n - length of sub-array
 * @returns - maximum sum of sub-array of input length
 */
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 2, 1, 8, 5, 6, 3], 3)); // 19
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 2)); // 15
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 1)); // 9
