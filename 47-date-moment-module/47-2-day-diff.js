/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */

const moment = require("moment");

var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');

function diff(fromDate, toDate) {
    // Write code here...
    fromDate = moment(fromDate);
    toDate = moment(toDate);
    return toDate.diff(fromDate,"days");
}

console.log(diff(fromDate, toDate));