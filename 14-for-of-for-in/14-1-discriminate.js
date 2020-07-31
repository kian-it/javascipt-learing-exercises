/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */

/**
 * for...of duyệt lần lượt giá trị (value) của các phần tử mảng
 * for...in duyệt chỉ số (index) thay vì giá trị (value), for..in dùng được cho cả đối tượng lẫn mảng.
 */

var arr = [4, 3, 3];

console.log('for..in: ');
for (const arrKey in arr) {
    console.log(arrKey);
}

console.log('\nfor..of: ')
for (const number of arr) {
    console.log(number);
}