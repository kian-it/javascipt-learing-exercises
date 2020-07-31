/**
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn
 * khi biết bán kính
 * Với PI = 3.14
 */
const PI = 3.14;

function circumferenceOfCircle(r) {
    // your code here!
    return 2 * r * PI;
}

function acreageOfCircle(r) {
    //your code here!
    return Math.pow(r, 2) * PI;
}