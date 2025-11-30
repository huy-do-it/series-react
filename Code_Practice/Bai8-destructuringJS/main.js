
/*
1. Destructuring assignment (Phân rã mảng)
Destructuring assignment là một cú pháp trong JavaScript cho phép bạn trích xuất các giá trị từ mảng hoặc đối tượng và gán chúng vào các biến một cách nhanh chóng và tiện lợi.
- Với Array: trích xuất dữ liệu dựa trên vị trí (index)
- với Object: trích xuất dữ liệu dựa trên tên thuộc tính (property name)
*/

//2. Destructuring với mảng
//giả sử chúng ta có 1 mảng lưu trữ tên người dùng như sau:
const userName = ["An", "Bình", "Chi", "Dũng"];

//nếu muốn lấy ra các phần tử trong mảng trên chúng ta làm như sau:
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
const user4 = userName[3];
console.log(user1, user2, user3, user4); // In ra: An Bình Chi Dũng

// nhưng nếu sử dụng destructuring assignment ta có thể làm như sau:, chúng ta sẽ viết ngắn gọn hơn như sau:
const [userA, userB, userC, userD] = userName;
console.log(userA, userB, userC, userD); // In ra: An Bình Chi Dũng

//2.1 Bỏ qua phần tử trong mảng
const [, userE, , userF] = userName;
console.log(userE);
console.log(userF);
//2.2 Destructuring với giá trị mặc định:
const [user5, user6, user7, user8, user9 = "Default Name"] = userName; //chỉ có 3 phần tử
console.log(user9); // In ra: Huy (sử dụng giá trị mặc định)

//2.3 Destructuring với toán tử rest
const [firstUser, user10, user11, user12, user13, ...restUsers] = userName;
console.log(firstUser); // In ra: An
console.log(user13); // In ra: undefined
console.log(restUsers); // In ra: ["Bình", "Chi", "Dũng"]

//3. Destructuring với đối tượng
//giả sử chúng ta có 1 đối tượng lưu trữ thông tin người dùng như sau:
const user = {
    name: "An",
    age: 25,
};

//nếu muốn lấy ra các thuộc tính trong đối tượng trên chúng ta làm như sau:
const userName1 = user.name;
const userAge1 = user.age;
console.log(userName1, userAge1); // In ra: An 25

// nhưng nếu sử dụng destructuring assignment ta có thể làm như sau:, chúng ta sẽ viết ngắn gọn hơn như sau:
//lưu ý: tên biến phải trùng với tên thuộc tính trong đối tượng
const { name, age } = user;
console.log(name, age); // In ra: An 25

//3.1 Đổi tên biến khi destructuring dùng alias
const { name: ten1, age: tuoi1 } = user;
console.log(ten1, tuoi1); // In ra: An 25

//3.2 Destructuring với giá trị mặc định
const { name: ten2, age: tuoi2, gioiTinh = "chưa khai báo" } = user;
console.log(ten2, tuoi2, gioiTinh); // In ra: An 25 chưa khai báo

//3.3 Destructuring với parameter
const { name: ten3, age: tuoi3, ...rest } = user;
console.log(ten3); // In ra: An
console.log(tuoi3); // In ra: 25    
console.log(rest); // In ra: {}
