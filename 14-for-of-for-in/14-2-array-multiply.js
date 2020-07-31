/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
    // Write code here...
    let m = 1;
    for (const arrElement of arr) {
        m *= arrElement;
    }
    return m;
}