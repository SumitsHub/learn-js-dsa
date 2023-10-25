/**
 * Finding substring in a string
 * PseudoCode -
 * - Loop over the longer string
 * - Loop over the shorter string
 * - If the characters don't match, break out the inner loop
 * - If the character do match, keep going
 * - If you complete the inner loop and find a match, increment the count of matches
 * - Return the count
 *
 */

function naiveString(string, pattern) {
  let i, j;
  let count = 0;
  // start iterating through original string
  for (i = 0; i < string.length; i++) {
    // iterate through pattern and compare character by character with original string
    for (j = 0; j < pattern.length; j++) {
      // if any character does't match break the loop
      if (string[i + j] !== pattern[j]) {
        break;
      }
    }
    // if all character matched i.e. loop didn't break in between -> increment the counter
    if (j === pattern.length) count++;
  }
  return count;
}

naiveString('lorie loled', 'lol'); // 1
naiveString('lop lop loljl', 'p l'); // 2
