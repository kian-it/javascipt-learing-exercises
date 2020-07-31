// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
// viết code ở đây.
    let arr = [a, b, c];
    return arr.reduce(function (max, element) {
        return element > max ? element : max;
    })
}

console.log(findMax(3, 5, 6));