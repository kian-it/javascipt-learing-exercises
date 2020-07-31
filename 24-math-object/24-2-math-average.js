/**
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round
 */

function average(arr) {
    // your code here!
    return Math.round(arr.reduce(function (totalPoint, point) {
        return totalPoint + point;
    }) / arr.length)
}

console.log(average([6, 5.6, 7, 8, 9.9, 6, 8, 9.0, 7.3]));