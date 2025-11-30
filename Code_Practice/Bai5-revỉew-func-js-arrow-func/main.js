

//1.khai báo hàm function declaration
// function showMessage() {
//     console.log("Xin chào bạn!");
// }

// showMessage(); // Gọi hàm để thực thi

// function showMessage02(userName) {
//     console.log("Xin chào bạn " + userName + "!");
// }
// showMessage02("Huy"); // Gọi hàm với đối số

// //hàm tính tích a * b
// function multiply(a, b) {
//     return a * b;
// }
 
// let result = multiply(2, 5); // Gọi hàm và lưu kết quả trả về
// console.log(result); // In kết quả ra console

// // Hoặc có thể viết gọn hơn
// console.log(multiply(3, 4)); // Gọi hàm và in kết quả ra console

// function showMessage03(userName = "Khách hàng") {
//     console.log("Xin chào bạn " + userName + "!");
// }

// showMessage03(); // Sử dụng giá trị mặc định

// showMessage03("An"); // Gọi hàm với đối số

// //hàm tính tổng a + b
// function sum(a = 3, b) {
//     return a + b;
// }

// // nếu chỉ truyển 1 đối số thì sẽ bị lỗi
// console.log(sum(7)); // Kết quả trả về sẽ là NaN vì b không được truyền giá trị

// // Để sử dụng giá trị mặc định cho a và truyền giá trị cho b, ta có thể làm như sau:    
// console.log(sum(undefined, 7)); // Truyền undefined để sử dụng giá trị mặc định cho a

// console.log(sum(3,5)); // Kết quả trả về sẽ là NaN vì b không được truyền giá trị

// //2. Hàm biểu thức (Function Expression)
// //điểm khác biệt giữ let và var or const
// // biến được khai báo bằng let chỉ có phạm vi trong khối lệnh (block scope)
// // biến được khai báo bằng var có phạm vi trong toàn bộ hàm (function scope)
// // biến được khai báo bằng const cũng có phạm vi trong khối lệnh (block scope) và không thể thay đổi giá trị sau khi đã gán

// let devide = function(c,d) {
//     return c / d;
// };

// console.log(devide(10, 2)); // Gọi hàm và in kết quả ra console
// let kq = devide(20, 4); // Gọi hàm và lưu kết quả trả về
//console.log(kq); // In kết quả ra console

///Bài 5 trở đi

//3. Hàm mũi tên (Arrow Function)
//3.1 Cú pháp hàm mũi tên và trường hợp tổng quát
console.log("Hàm mũi tên (Arrow Function)");
let ten_ham = (parameters) => {
    //body hàm
    //return something;
}

let multiplyAndAddArrow = (a, b) => {
    let product = a * b;
    sum = a + b;
    return product + sum;
}

let resultArrow = multiplyAndAddArrow(2, 3);
console.log(resultArrow); // In kết quả ra console

//3.2 Trường hợp hàm mũi tên có một biểu thức or 1 câu lệnh duy nhất
let multiply = (a, b) => a * b; // Không cần dấu ngoặc nhọn và từ khóa return
let resultMul = multiply(4, 5);
console.log(resultMul); // In kết quả ra console

//3.3 khi trả về 1 đối tượng (object)
// let person = (name, age) => { 
//     return { "họ và tên": name, "tuổi": age }; }

let person = (name, age) => ({ "họ và tên": name, "tuổi": age });
let user = person("Huy", 21);
console.log(user); // In kết quả ra console

