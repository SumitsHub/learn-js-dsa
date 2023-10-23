/**
 *
 * @param {*} arr1 - input array containing numbers
 * @param {*} arr2 - input array containing square of numbers in arr1
 * @returns - true if square of every number in arr1 present in arr2 including duplicate values otherwise false
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]); // true
same([1, 2, 3, 4], [16, 4, 9, 1]); // true
same([1, 2, 3, 2], [1, 4, 9]); // false
