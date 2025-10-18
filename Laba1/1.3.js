"use strict";

const mixedArray = [
    11, "Red", true, 242, false, "White", false, -11313, "Black",
    113, 1, -435, 53, null, undefined, {}, [], () => {}, Symbol('id')
];

const countTypes = arr => {
    const counter = {};
    for (const val of arr) {
        const typeName = typeof val;
        counter[typeName] = (counter[typeName] || 0) + 1;
    }
    return counter;
}

const result = countTypes(mixedArray);
console.dir(result);