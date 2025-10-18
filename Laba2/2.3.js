"use strict";

function square(x) { return x * x; }
function cube(x) { return x * x * x; }
function average(a, b) { return (a + b) / 2; }

function calculate() {
    const results = [];
    for (let i = 0; i <= 9; i++) results.push(average(square(i), cube(i)));
    return results;
}

console.log(calculate());
