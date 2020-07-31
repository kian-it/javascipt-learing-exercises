/**
 * Tính số ms chênh lệch giữa date b và date a
 */
const moment = require("moment");

function diffMs(a, b) {
    // viết code ở đây
    let fromDate = moment(new Date(a));
    let toDate = moment(new Date(b));
    return toDate.diff(fromDate, "milliseconds");
}

console.log(diffMs("02/10/2019","10/10/2019"));