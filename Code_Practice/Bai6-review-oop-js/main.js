/*
1.Objects là gì?
Objects (đối tượng) trong JavaScript là một kiểu dữ liệu phức tạp cho phép bạn lưu trữ nhiều giá trị dưới dạng các cặp key-value (khóa-giá trị). Mỗi đối tượng có thể chứa nhiều thuộc tính (properties) và phương thức (methods) để mô tả và thao tác với dữ liệu.

2.Tạo đối tượng
Có nhiều cách để tạo đối tượng trong JavaScript, dưới đây là hai cách phổ biến nhất:
- Sử dụng cú pháp literal:
  let person = {
      name: "John",
        age: 30,
        greet: function() {
            console.log("Hello, " + this.name);
        }
    };  
- Sử dụng từ khóa new:
    let person = new Object();
    person.name = "John";
    person.age = 30;
    person.greet = function() {
        console.log("Hello, " + this.name);
    };

3.Truy cập và thao tác với thuộc tính và phương thức        
*/


const user = {
    // Thuộc tính (property) của đối tượng
    name: "Huy",
    age: 21,
    "giới tính": "Nam",

    // Phương thức (method) của đối tượng
    xinChao: function() {
        console.log("Xin chào, " + this.name);
    }
};

console.log(user); // In toàn bộ đối tượng ra console
// Truy cập thuộc tính
console.log("Tên người dùng: " + user.name); // In ra: Tên người dùng: Huy
console.log("Tuổi người dùng: " + user.age); // In ra: Tuổi người dùng: 21
console.log( user["giới tính"]); // In ra: Nam

// Gọi phương thức
user.xinChao(); // In ra: Xin chào, Huy

// class
class Car {
    constructor(name, age) {
        this.ten = name;
        this.tuoi = age;
    }
    //phương thức
    xinChao() {
        console.log("Xin chào, " + this.ten);
        console.log(this.tuoi);
    }
}

const user1 = new Car("Huy", 21);
console.log(user1.ten);
console.log(user1.tuoi);
user1.xinChao();