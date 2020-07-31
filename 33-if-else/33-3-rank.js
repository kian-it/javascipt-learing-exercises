/**
 * Viết hàm xếp hạng điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
    // your code here!
    if (score > 10 || score<0) return 'diem tao lao';
    if (score<5) return 'C';
    if (score<7) return 'B';
    return 'A';
}