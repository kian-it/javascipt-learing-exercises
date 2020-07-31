// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (ascending order)

function sortNumber(arr) {
    // Write code here...
    return arr.sort(function (a, b) {
        return a - b;
    });
}
let array =[9, 2, 3, 1, 4, 5];
console.log(sortNumber(array), array);