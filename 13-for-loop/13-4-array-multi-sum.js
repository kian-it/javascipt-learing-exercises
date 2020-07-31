// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

function sumMultiplyArray(a, b) {
    // viết code ở đây.
    let s = 0;
    for (const aElement of a) {
        for (const bElement of b) {
            s += aElement * bElement;
        }
    }
    return s;
}