const items = [
    true, 'hello', 5, 12, -200, false, false, 'word',
    null, undefined, { x: 1 }, [1, 2], () => {}, BigInt(10), Symbol('s')
];

const counts = { number: 0, string: 0, boolean: 0 };
for (const it of items) {
    const t = typeof it;
    if (t in counts) counts[t] += 1;
}
console.dir({ counts });

const dynamicCounts = {};
for (const it of items) {
    const t = typeof it;
    dynamicCounts[t] = (dynamicCounts[t] || 0) + 1;
}
console.dir({ dynamicCounts });
