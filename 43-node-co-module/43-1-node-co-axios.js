/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
];

// Cách 1: Sử dụng vòng lặp for

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise

const axios = require("axios").default;
const co = require("co");

//Cach 1
function fetchDataByForLoop(url) {
    axios.get(url).then(function (response) {
        console.log(response.data);
    });
}

for (const url of urls) {
    fetchDataByForLoop(url);
}

//Cach 2
let fetchDataByCo = co.wrap(function* (urls) {
    let responseData = yield urls.map(function (url) {
        return axios.get(url);
    })
    return responseData
})

fetchDataByCo(urls).then(function (responses) {
    console.log("Cach 2");
    console.log(responses.map(function (response) {
        return response.data;
    }));
})