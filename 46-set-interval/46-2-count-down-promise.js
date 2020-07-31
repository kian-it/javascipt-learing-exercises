/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
    return new Promise(function (resolve, reject) {
        try {
            let intervalID = setInterval(function () {
                console.log(x);
                if (x === 0) {
                    clearInterval(intervalID);
                    resolve();
                } else x--;
            }, 1000);
        } catch (e) {
            reject(e);
        }
    });
}

function sayHappyNewYear() {
    console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);