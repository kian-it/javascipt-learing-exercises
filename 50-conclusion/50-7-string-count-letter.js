//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str) {
    // viết code ở đây.
    let flag = str.split('').reduce(function (flag, element) {
        if (element === 'p') return flag - 1;
        else if (element === 't') return flag + 1;
        else return flag;
    }, 0);
    return flag === 0;
}

console.log(equal_pt("pttp,p,pt,t,p,t"));