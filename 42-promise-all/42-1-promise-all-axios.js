/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

const axios = require("axios").default;

Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/todos/1"),
    axios.get("https://jsonplaceholder.typicode.com/todos/2"),
    axios.get("https://jsonplaceholder.typicode.com/todos/3")
]).then(function (responses) {
    for (const responseElement of responses) {
        console.log(responseElement.data);
    }
}).catch(function (error) {
    console.log(error);
})