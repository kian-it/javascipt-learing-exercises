/* Write a function that splits an array (first argument) into groups
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
    // write code here.
    let resultArr = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        resultArr[i] = arr.slice(i*size, size*(i+1));
    }
    return resultArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 2));