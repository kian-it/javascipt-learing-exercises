/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
    // viết code ở đây.
    if (x <= 1) return 0;
    let oddNumber = 1;
    let sum = 0;
    while (oddNumber < x) {
        sum += oddNumber;
        oddNumber += 2;
    }
    return sum;
}