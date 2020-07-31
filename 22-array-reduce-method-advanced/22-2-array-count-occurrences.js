/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example:
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
 }
 */

function countOccurrences(arr) {
    // viết code ở đây.
    return arr.reduce(function (count, element) {
        if (element in count) count[element] += 1;
        else count[element] = 1;
        return count;
    }, {})
}

console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));