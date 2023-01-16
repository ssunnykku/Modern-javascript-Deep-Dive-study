var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

console.log(typeof integer); // number
console.log(typeof double); // number
console.log(typeof negative); // number

var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

// 모두 2진수로 저장된다.
// 2진수, 8진수, 16진수 데이터 타입을 제공하지 않기
//  때문에 이들 값을 참조하면 모두 10진수로 해석된다.
console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65

// 모든 수를 실수로 처리하기 때문에 정수로 표시되는 수 끼리 나누어도 실수가 나옴

var result = 4 / 2;
console.log(result); //2
console.log(3 / 2); // 1.5

console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * "String"); // NaN
