var age = 19;
var canDrive;

// Chuyển đổi đoạn code dưới đây dùng ternary operator mà không làm thay đổi logic
/**
 * if (age > 16) {
 *  canDrive = true;
 * } else {
 *  canDrive = false;
 * }
 *
 * @param {number} age;
 * @return {boolean} canDrive;
 */

function checkCanDrive(age) {
    // Viết lại ở đây
    (age > 16) ? canDrive = true : canDrive = false;
    return canDrive;
}
