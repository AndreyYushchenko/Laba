function inc(n) {
    if (typeof n !== 'number') {
        throw new TypeError('inc expects a number');
    }
    return n + 1;
}

function incRef(obj) {
    if (!obj || typeof obj.n !== 'number') {
        throw new TypeError('incRef expects an object with numeric property n');
    }
    obj.n += 1;
}

module.exports = { inc, incRef };
