/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a"
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

function fromCharCode() {
    // viết code ở đây.
    let s = '';
    for (let i = 0; i < 26; i++) {
        s += String.fromCharCode(i + 97);
    }
    return s;
}