function funcThree() {
  console.log('Three');
}

function funcTwo() {
  funcThree();
  console.log('Two');
}

function funcOne() {
  funcTwo();
  console.log('One');
}

funcOne();

// Output -
// Three
// Two
// One
