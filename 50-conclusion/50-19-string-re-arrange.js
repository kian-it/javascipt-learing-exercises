/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
// Viết code tại đây!
    if (str1.length !== str2.length) return false;
    let sortedStr1 = str1.split('').sort(function (a, b) {
        return a - b;
    }).join('');
    let sortedStr2 = str1.split('').sort(function (a, b) {
        return a - b;
    }).join('');
    return  sortedStr1.startsWith(sortedStr2);
}
