//Tính tổng giai thừa của một số nguyên
function factorials(number) {
    let f = 1;
    for (let i = 0; i < number; i++) {
        f *= i + 1;
    }
    return f;
}