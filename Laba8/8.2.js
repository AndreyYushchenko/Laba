const store = (value) => {
  return () => value;
};

const read = store(5);
const val = read();
console.log(val);

module.exports = store;
