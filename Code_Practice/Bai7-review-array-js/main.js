/*
Arrray(mảng) là 1 dạng đặc biệt của object đc thiết kế để luu trữ nhiều giá trị theo 1 thứ tự nhất định và truy cập chúng thông qua chỉ số(index).
1.Định nghĩa và tạo mảng
- Tạo mảng bằng cặp ngoặc vuông []
let fruits = ["Apple", "Banana", "Orange"];
- ngoài ra có cách tạo bằng constructor của lớp Array
let vegetables = new Array("Carrot", "Broccoli", "Spinach");

Arrays - Bài tập 7: Tạo và sử dụng đối tượng trong JavaScript
Yêu cầu:
1.Tạo một đối tượng đại diện cho một người dùng với các thuộc tính như tên, tuổi và giới tính.
2.Thêm một phương thức vào đối tượng để in ra lời chào sử dụng tên của người dùng.
3.Truy cập và in ra các thuộc tính của đối tượng cũng như gọi phương thức để hiển thị lời chào.
*/

const traiCay = ["Cam", "Táo", "Chuối", "Cam"];
console.log(typeof traiCay); // In ra: object
console.log(traiCay); // In toàn bộ mảng ra console

//truy câp phần tử trong mảng thông qua chỉ số(index)
console.log(traiCay[0]); // In ra: Táo
console.log(traiCay[1]); // In ra: Chuối
console.log(traiCay[2]); // In ra: Cam

//2. Mảng lòng nhau và kiểu dữ liêu trong mảng
// Mảng có thể chứa các phần tử là các kiểu dữ liệu khác nhau, bao gồm cả mảng khác
const mang = [1, "Hello", true, [2, 3, 4], { name: "Huy", age: 21 }];
//2.1 truy cập phần tử trong mảng lồng nhau
console.log(mang[3]); // In ra: [2, 3, 4]
console.log(mang[3][0]); // In ra: 2

//3. Một số phương thức hữu ích của mảng thường dùng
//3.1 Phương thức push(): Thêm phần tử vào cuối mảng
traiCay.push("Nho");
console.log(traiCay); // In ra: ["Táo", "Chuối", "Cam", "Nho"]

//3.2 phương thức map(): Tạo mảng mới bằng cách áp dụng hàm cho từng phần tử của mảng gốc
const soNguyen = [1, 2, 3, 4, 5];
console.log("Sử dụng phương thức map():");
// console.log(soNguyen);

const so2 = soNguyen.map(item => item * 2);
// console.log(so2); // In ra: [2, 4, 6, 8, 10]

//biến đổi phần tử của mảng thành đối tượng
const so3 = soNguyen.map(item => ({ number: item }));
// console.log(so3); // In ra: [{number: 1}, {number: 2}, {number: 3}, {number: 4}, {number: 5}]

//3.3 Phương thức findIndex(): Tìm chỉ số của phần tử đầu tiên
const kq = traiCay.findIndex(item => {
    return item === "Cam";
});
console.log("Sử dụng phương thức findIndex():");
console.log(kq); // In ra: 2 (chỉ số của phần tử "Cam")