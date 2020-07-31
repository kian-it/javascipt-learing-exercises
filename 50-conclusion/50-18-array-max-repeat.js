/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
// Viết code tại đây!
    let sortedArray = arr.sort(function (a, b) {
        return a - b;
    });
    let result = [];
    let previousMax = -1;
    let max = 0;
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (sortedArray[i] !== sortedArray[i - 1]) {
            if (count === max) {
                result.push(sortedArray[i - 1]);
            } else if (count > max) {
                result = [];
                previousMax = max;
                max = count;
                result[0] = sortedArray[i - 1];
            }
            count = 1;
        } else {
            count++;
        }
    }
    return result;
}