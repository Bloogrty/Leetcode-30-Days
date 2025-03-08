// PROMISE TIME LIMIT

const timeLimit = (fn, t) => {
  return async (...args) => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject("Time Limit Exceeded"), t);

      fn(...args)
        .then((res) => {
          clearTimeout(timer);
          resolve(res);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };
};

// TEST CASE
// Test Case 1: Function exceeds the time limit
const limited1 = timeLimit(
  (t) => new Promise((res) => setTimeout(res, t)),
  100
);
limited1(150).catch(console.log); // Expected: "Time Limit Exceeded" at ~100ms

// Test Case 2: Function completes within the time limit
const limited2 = timeLimit(
  (t) => new Promise((res) => setTimeout(() => res("Done"), t)),
  200
);
limited2(150).then(console.log); // Expected: "Done" at ~150ms

// Test Case 3: Function completes exactly at the time limit
const limited3 = timeLimit(
  (t) => new Promise((res) => setTimeout(() => res("Exact"), t)),
  100
);
limited3(100).then(console.log); // Expected: "Exact" at ~100ms
