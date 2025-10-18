"use strict";

const inc = obj => obj.n++;

const num = { n: 5 };
inc(num);
console.dir(num); 
