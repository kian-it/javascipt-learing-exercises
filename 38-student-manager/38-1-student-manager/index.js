/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

let phoneBook = [];

function Contact(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.edit = function (newName, newNumberPhone) {
    this.name = newName;
    this.phoneNumber = newNumberPhone;
    return this;
}

function remove(contact) {
    let contactInPhoneBook = phoneBook.find(function (elementContact) {
        if (contact.name === elementContact.name && contact.phoneNumber === elementContact.phoneNumber) return elementContact;
    })
    return phoneBook.splice(phoneBook.indexOf(contactInPhoneBook), 1);
}

function find(keyword) {
    return phoneBook.filter(function (contact) {
        return contact.name.toUpperCase().includes(keyword.toUpperCase())
            || contact.phoneNumber.toString().toUpperCase().includes(keyword.toUpperCase());
    })
}


//TEST
let contact1 = new Contact('Bao', 123);
let contact2 = new Contact('Toan', 456);
let contact3 = new Contact('Linh', 4567);
phoneBook.push(contact1);
phoneBook.push(contact2);
phoneBook.push(contact3)
console.log(phoneBook)

remove(new Contact('Toan', 456));
console.log(phoneBook);

console.log(find('A'));

console.log("Contact Management App");
console.log("-------List Contact--------");
for (const phoneBookElement of phoneBook) {
    console.log(phoneBookElement.name, "---------", phoneBookElement.phoneNumber);
}
