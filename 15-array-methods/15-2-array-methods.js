/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
// JavaScript Demo:
//Array.prototype.concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
//////////////////////////////////////////

//Array.prototype.push()
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
//////////////////////////////////////////

//Array.prototype.pop()
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
//////////////////////////////////////////

// Array.prototype.shift()
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
//////////////////////////////////////////

// Array.prototype.unshift()
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
//////////////////////////////////////////