// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

function printOdd(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

printOdd(100);

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

function printMul() {
  for (var i = 100; i > 0; i--) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}

printMul();

// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

function printSequence() {
  var i = 4;
  while (i >= -3.5) {
    console.log(i);
    i -= 1.5;
  }
}

printSequence();

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

function addNum(start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(addNum(1, 100));

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

function multipleNum(start, end) {
  var product = start;
  for (var i = start; i <= end; i++) {
    product *= i;
  }
  return product;
}

console.log(multipleNum(1, 12));
