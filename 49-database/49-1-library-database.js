/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */

let books = [];
let users = [];
let logs = [];

function Book(name, id = null) {
    this.id = id;
    this.name = name;
}

function User(name, outOfDate = 0, id = null) {
    this.id = id;
    this.name = name;
    this.outOfDate = outOfDate;
}

function Log(userId, bookId, time, type, durationInDay = 30, outOfDate = 0, id = null) {
    this.id = id;
    this.userId = userId;
    this.bookId = bookId;
    this.time = time;
    this.type = type;
    this.durationInDay = durationInDay;
    this.outOfDate = outOfDate;
}

function getID(list) {
    return list.length;
}

function addBooks(bookArray) {
    for (const book of bookArray) {
        book.id = getID(books);
        books.push(book);
    }
}

function addUsers(userArray) {
    for (const user of userArray) {
        user.id = getID(users);
        users.push(user);
    }
}

function addLogs(logArray) {
    for (const log of logArray) {
        logs.push(log);
    }
}

let bookArray = [
    new Book("Bao and his friends"),
    new Book("His friends and Bao")
];

let userArray = [
    new User("Bao"),
    new User("Nam")
]

addBooks(bookArray);
console.log(books);

addUsers(userArray);
console.log(users);