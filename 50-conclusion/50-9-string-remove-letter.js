//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
    // viết code ở đây.
    str = str.split('');
    str.splice(n, 1);
    return str.join('');
}

console.log(omitCharAt("abcd", 1));