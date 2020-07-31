/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    // your code here
    let max = arr[0];
    for (const arrElement of arr) {
        if (arrElement>max) max=arrElement;
    }
    return max;
}