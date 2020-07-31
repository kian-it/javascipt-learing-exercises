// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    return arr.filter(function (x) {
        if (x>=5) return x;
    })
}