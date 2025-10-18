"use strict";

const phoneBookArray = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Seneca', phone: '+380501112233' },
    { name: 'Plato', phone: '+380631234567' }
];

function findPhoneByNameArray(name) {
    for (const entry of phoneBookArray) if (entry.name === name) return entry.phone;
    return null;
}

console.log(findPhoneByNameArray('Seneca'));

const phoneBookHash = {};
for (const entry of phoneBookArray) phoneBookHash[entry.name] = entry.phone;

function findPhoneByNameHash(name) {
    return phoneBookHash[name] || null;
}

console.log(findPhoneByNameHash('Plato'));
