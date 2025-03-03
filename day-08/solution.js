const compose = (functions) => (x) => {
  if (functions.length === 0) return x;

  let result = x;
  for (let i = functions.length - 1; i >= 0; i--) {
    result = functions[i](result);
  }
  return result;
};

// Example cases
console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])(4)); // 65
console.log(compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x])(1)); // 1000
console.log(compose([])(42)); // 42
