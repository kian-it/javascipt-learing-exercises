/**
 * Viết hàm isTruthy nhận vào 1 giá trị x, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

function isTruthy(x) {
    // your code here!
    if (typeof x === "object" && x !== null || typeof x === "string" && x !== "") return true;
    return !(x === false || x === 0 || x === "" || x === null || x === undefined || isNaN(x));
}

// console.log(isNaN({name: 'bao'}));

console.log(typeof null);

console.log(isTruthy(null));