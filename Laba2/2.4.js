"use strict";

function fn() {
    const constObj = { name: "ConstName" };
    let varObj = { name: "VarName" };

    constObj.name = "NewConstName";
    varObj.name = "NewVarName";

    varObj = { name: "AnotherVar" };

    console.log(constObj, varObj);
}

fn();

function createUser(name, city) {
    return { name, city };
}

console.log(createUser('Marcus Aurelius', 'Roma'));
