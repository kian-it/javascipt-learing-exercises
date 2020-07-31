/**
 * Ghi lại những kiến thức mà bạn hiểu được trong bài bằng cách trả lời các câu hỏi sau:
 * 1. JSON là gì?
 * 2. Cấu trúc JSON?
 */

function answer() {
    // Ghi câu trả lời của bạn bên trong 2 dấu ``
    return `
  1. JSON là viết tắt của JavaScript Object Notation, là một tiêu chuẩn mở để trao đổi dữ liệu trên web. 
  2. Định dạng JSON sử dụng các cặp key – value để dữ liệu sử dụng. Nó hỗ trợ các cấu trúc dữ liệu như đối tượng và mảng.
    Chuỗi JSON được bao lại bởi dấu ngoặc nhọn {}
    Các key, valuecủa JSON bắt buộc phải đặt trong dấu nháy kép {“}, nếu bạn đặt nó trong dấu nháy đơn thì đây không phải là một chuỗi JSON đúng chuẩn.
    Nếu trường hợp trong value của bạn có chứa dấu nháy kép " thì hãy dùng dấu \\ để đặt trước nó, ví dụ (\\"json là gì\\").
    Nếu có nhiều dữ liệu thì dùng dấu phẩy , để ngăn cách.
    Các key của JSON bạn nên đặt chữ cái không dấu hoặc số, dấu _ và không có khoảng trắng., ký tự đầu tiên không nên đặt là số.
  `
}

console.log(answer());