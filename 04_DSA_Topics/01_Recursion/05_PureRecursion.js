// collecting odd values using recursion without any helper method
function collectOdds(arr) {
  let result = [];

  if (result.length === 0) return result;

  if (arr[0] % 2 !== 0) result.push(arr[0]);

  //   result = [...result, ...collectOdds(arr.slice(1))];
  // OR
  result = result.concat(collectOdds(arr.slice(1)));

  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5]));
