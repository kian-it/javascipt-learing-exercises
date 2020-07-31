/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

function sum(array) {
    // viết code ở đây.
    var sum = 0;
    for (const arrayKey of array) {
        sum += arrayKey;
    }
    return sum;
}