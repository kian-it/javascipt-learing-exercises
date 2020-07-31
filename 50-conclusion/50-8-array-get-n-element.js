// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n = 0) {
    // viết code ở đây.
    let index = -1;
    return array.filter(function (item) {
        index++;
        return (index < n);
    });
}

console.log(first([2, 2, 2, 2, 2, 2]));
