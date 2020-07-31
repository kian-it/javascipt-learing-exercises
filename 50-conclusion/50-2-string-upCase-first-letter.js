// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
    // viết code ở đây
    str = ' ' + str;
    let arr = str.split('');
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1]===" ") arr[i] = arr[i].toUpperCase();
    }
    return arr.join('').substring(1);
}

console.log(capitalize(" abc def"));