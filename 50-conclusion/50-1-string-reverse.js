// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
    // viết code ở đây.
    let arr = str.split('');
    return arr.reverse().join('');
}

console.log(reverse("abc"));