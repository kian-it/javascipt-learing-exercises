var a = 1;

function foo() {
    var a = 2;
    return a;
}

function bar() {
    a = 2;
    return a;
}

foo();
console.log(a); // Kết quả?
bar();
console.log(a); // Kết quả?
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh

//Hàm foo không làm thay đổi giá trị biến global a vì (var a chỉ khai báo một biến local a mới và thay đổi nó);
//Hàm bar làm thay đổi giá trị biến global a