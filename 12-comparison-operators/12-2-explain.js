var a = {
    foo: 'bar'
};

var b = {
    foo: 'bar'
};

console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.

/**
 * a và b có các thuộc tính giống nhau, chứa các giá trị giống nhau nhưng chúng là 2 đối tượng hoàn toàn khác nhau nên so sánh bằng trả về giá trị false
 */