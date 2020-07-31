// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
    // your code here
    return array.find(function (number) {
        return number % 2 === 0;
    })
}