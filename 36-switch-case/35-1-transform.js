/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    // your code here
    return arr.map(function (item) {
        switch (item.toUpperCase(item)) {
            case 'A':
                return 1;
            case 'B':
                return 2;
            default:
                return 0;
        }
    })
}