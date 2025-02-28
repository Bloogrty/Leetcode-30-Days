const filter = (arr, fn) => {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

console.log(filter([0, 10, 20, 30], (n) => n > 10)); // ✅ Expected: [20, 30]

console.log(filter([1, 2, 3], (n, i) => i === 0)); // ✅ Expected: [1]

console.log(filter([-2, -1, 0, 1, 2], (n) => n + 1)); // ✅ Expected: [-2, 0, 1, 2]

console.log(filter([], (n) => n > 0)); // ✅ Expected: []
