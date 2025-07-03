function identity(value) {
    return value;
}
var output = identity("hello");
console.log(output);
var output2 = identity(10);
console.log(output2);
function getValue(obj, key) {
    return obj[key];
}
var objects = { name: "john", age: 20 };
var result2 = getValue(objects, "name");
console.log(result2);
