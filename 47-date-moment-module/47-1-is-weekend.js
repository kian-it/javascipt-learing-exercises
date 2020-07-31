/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật),
 * ngược lại trả về false
 */

const moment = require("moment");

function isWeekend(dateString) {
    // Write code here...
    let date = moment(new Date(dateString));
    console.log(date.format("[That day is] dddd"));
    return (date.format("e") === '6' || date.format("e") === '0');
}

console.log("Weekend?", isWeekend("2017/02/20"));