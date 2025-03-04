const once = (fn) => {
  // Since this function should only be called once, we create a variable `called` set to false.
  // When the function is first called, `called` becomes true, allowing `fn` to execute.
  // On subsequent calls, it returns undefined without executing `fn` again.
  let called = false;
  let result;

  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args); //call original function
      return result;
    }
    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
