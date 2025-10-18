const { inc, incRef } = require('./inc');

const a = 5;
const b = inc(a);
console.dir({ a, b });

const obj = { n: 5 };
incRef(obj);
console.dir(obj);
