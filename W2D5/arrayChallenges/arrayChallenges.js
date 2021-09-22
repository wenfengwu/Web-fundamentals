function alwaysHungry(arr) {
  // your code here
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      count++;
    }
  }
  if (count == 0) {
    console.log("I'm hungry");
  }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr, cutoff) {
  var filteredArr = [];
  // your code here
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
  var sum = 0;
  // calculate the average
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > sum / arr.length) {
      count++;
    }
  }
  // count how many values are greated than the average
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
  // your code here
  var left = 0;
  var right = arr.length - 1;
  while (left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  // your code here
  while (fibArr.length < n) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
