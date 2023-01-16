var foo;
console.log(typeof foo); //undefined

foo = 3;
console.log(typeof foo); // number

foo = "Hello";
console.log(typeof foo); //string

foo = null;
console.log(typeof foo); //object

foo = Symbol(); // 심벌
console.log(typeof foo); // symbol

foo = {}; // 객체
console.log(typeof foo); // object

foo = []; // 배열
console.log(typeof foo); //object

foo = function () {};
console.log(typeof foo);
