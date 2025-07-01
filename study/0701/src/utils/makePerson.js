"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = makePerson;
exports.testMakePerson = testMakePerson;
function makePerson(name, age) {
    return { name, age };
}
function testMakePerson() {
    console.log(makePerson("Jane", 22), makePerson("Jack", 33));
}
