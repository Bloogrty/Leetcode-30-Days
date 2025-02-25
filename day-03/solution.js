// link
// https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript

const expect = (val) => {
  return {
    toBe: (expected) => {
      if (val !== expected) {
        throw new Error("Not Equal");
      }
      return true;
    },

    notToBe: (expected) => {
      if (val === expected) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};
