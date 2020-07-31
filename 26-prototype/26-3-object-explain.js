/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
 */

function answer() {
    return `
  // Ghi câu trả lời ở đây
  Vì Person.prototype.sing là thuộc tính dùng chung cho tất cả Object kiểu Person nên mrThinh.sing === mrDung.sing
  `
}

function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;
}

Person.prototype.sing = function() {
    console.log(`Là lá la...`);
};

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

console.log(mrThinh.sing === mrDung.sing);
