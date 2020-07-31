/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    // viết code ở đây.
    return str.split('').map(function (character) {
        return String.fromCharCode(character.charCodeAt(0) + 1);
    }).join('');
}

console.log(toNextChar("Hello"));