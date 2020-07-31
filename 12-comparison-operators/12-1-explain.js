var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.

/**
 * a và b tuy chứa giá trị giống nhau nhưng vẫn là 2 đối tượng (array) khác nhau nên không bằng nhau.
 * Kết quả so sánh bằng (===) trả về giá trị false
 */