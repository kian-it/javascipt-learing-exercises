/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/FarflungIdioticExabyte
 */

function answer() {
    return `
  // Ghi câu trả lời ở đây
  Vì thuộc tính sing là thuộc tính riêng của từng object (mỗi lần new object, this.sing sẽ được tạo mới) nên mrThinh.sing !== mrDung.sing
  `
}

function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;

    this.sing = function() {
        console.log(`Là lá la...`);
    };

}

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

console.log(mrThinh.sing === mrDung.sing);
