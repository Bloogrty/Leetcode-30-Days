// Timeout Cancellation

// SOLUTION 1
// const cancellable = (fn, args, t) => {
//   // create timer
//   const timer = setTimeout(() => {
//     const result = fn(...args);
//     console.log([
//       // data in array
//       {
//         time: t,
//         returned: result,
//       },
//     ]);
//   }, t);

//   return () => {
//     // cancel timer
//     clearTimeout(timer);
//     console.log("Cancelled!");
//   };
// };

// SOLUTION 2
const cancellable = (fn, args, t) => {
  // set timeout
  const timer = setTimeout(() => {
    fn(...args);
  }, t);
  return () => {
    clearTimeout(timer);
  };
};

// TEST CASE

const fn = (x) => x * 5;
const args = [2];
const t = 20;

const cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, 50); // Cancel after 50ms (too late)
