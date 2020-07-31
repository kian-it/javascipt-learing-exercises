/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ
 * cách ngày được truyền vào n ngày
 */

const moment = require("moment");

var date = new Date("06/10/2019")

function subtractDays(date, n) {
    // Write code here...
    return moment(date).subtract(n, "days").valueOf();
}

console.log(subtractDays(date, 5));