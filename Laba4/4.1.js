'use strict';

const sumFor = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) total += args[i];
    return total;
};

const sumForOf = (...args) => {
    let total = 0;
    for (const num of args) total += num;
    return total;
};

const sumWhile = (...args) => {
    let total = 0;
    let i = 0;
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
};

const sumDoWhile = (...args) => {
    let total = 0;
    let i = 0;
    if (args.length === 0) return 0;
    do {
        total += args[i];
        i++;
    } while (i < args.length);
    return total;
};

const sumReduce = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sumFor(1, 2, 3));
console.log(sumForOf(0));
console.log(sumWhile());
console.log(sumDoWhile(1, -1, 1));
console.log(sumReduce(10, -1, -1, -1));

const max = (arr2d) => {
    let maxVal = -Infinity;
    for (const row of arr2d) {
        for (const val of row) if (val > maxVal) maxVal = val;
    }
    return maxVal;
};

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

const ages = (persons) => {
    const result = {};
    for (const name in persons) {
        const p = persons[name];
        result[name] = p.died - p.born;
    }
    return result;
};

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));
