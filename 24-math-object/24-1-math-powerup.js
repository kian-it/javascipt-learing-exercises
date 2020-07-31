// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    // your code here!
    return arr.map(function (item) {
        if (item % 2 === 0)
            return Math.pow(item, 2);
        else return item;
    });
}