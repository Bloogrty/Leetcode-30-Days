const map = (arr, fn) => {
  const result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }
  return result;
};

// Test cases
console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
); // Expected output: [2,3,4]

console.log(
  map([1, 2, 3], function plusI(n, i) {
    return n + i;
  })
); // Expected output: [1,3,5]

console.log(
  map([10, 20, 30], function constant() {
    return 42;
  })
); // Expected output: [42,42,42]
