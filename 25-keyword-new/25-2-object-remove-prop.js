/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
 */

function removeProp(prop) {
    var student = {
        name: "David Rayy",
        class: "VI",
        rollno: 12
    }
    // chỉ viết code ở dưới dòng này.
    let newStudent = {};
    for (const studentKey in student) {
        if (studentKey !== prop) newStudent[studentKey] = student[studentKey];
    }
    return newStudent;
}
