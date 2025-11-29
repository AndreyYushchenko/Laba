const contract = (fn, ...types) => {
  const argTypes = types.slice(0, -1);
  const returnType = types[types.length - 1];

  return (...args) => {
    for (let i = 0; i < argTypes.length; i++) {
      if (typeof args[i] !== argTypes[i].name.toLowerCase()) {
        throw new TypeError(
          `Argument ${i} expected ${argTypes[i].name}, got ${typeof args[i]}`
        );
      }
    }

    const result = fn(...args);

    if (typeof result !== returnType.name.toLowerCase()) {
      throw new TypeError(
        `Return value expected ${returnType.name}, got ${typeof result}`
      );
    }

    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.log(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.log(res2);

module.exports = contract;
