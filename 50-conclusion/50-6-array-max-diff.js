/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example:
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
    // viết code ở đây.
    let maxDiff = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (maxDiff < Math.abs(arr[i + 1] - arr[i])) maxDiff = Math.abs(arr[i + 1] - arr[i]);
    }
    return maxDiff;
}

console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));