'use strict';

const random = (min, max) => {
    if (max === undefined) [min, max] = [0, min];
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(10));

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const generateKey = (length, chars) => {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[random(chars.length - 1)];
    }
    return result;
};

console.log(generateKey(16, characters));

const ipToNumber = (ip = '127.0.0.1') =>
    ip.split('.').map(Number).reduce((acc, byte, i) => acc + (byte << (8 * (3 - i))), 0);

console.log(ipToNumber());
console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumber('192.168.1.10'));
console.log(ipToNumber('165.225.133.150'));
console.log(ipToNumber('0.0.0.0'));
console.log(ipToNumber('8.8.8.8'));

const lst_of_func = {
    m1: x => [x],
    m2: function(x, y) { return [x, y]; },
    m3(x, y, z) { return [x, y, z]; }
};

const introspectFunctions = iface =>
    Object.keys(iface)
        .filter(k => typeof iface[k] === 'function')
        .map(k => [k, iface[k].length]);

for (const [name, length] of introspectFunctions(lst_of_func)) {
    console.log(`${name}: ${length}`);
}
