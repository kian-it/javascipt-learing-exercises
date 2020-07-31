/**
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không?
 */

function rightTriangle(a, b, c) {
    // your code here
    if (a <= 0 || b <= 0 || c <= 0) return false;
    let squareA = Math.pow(a, 2);
    let squareB = Math.pow(b, 2);
    let squareC = Math.pow(c, 2);
    return ((squareA + squareB === squareC) || (squareB + squareC === squareA) || (squareA + squareC === squareB));
}