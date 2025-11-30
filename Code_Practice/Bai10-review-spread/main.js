//1. spread operator với mảng
// Danh sách sở thích hiện tại 
let sothich = ['đọc sách', 'du lịch', 'nấu ăn'];

//Danh sách sở thích mới muốn thêm
const sothichMoi = ['chơi thể thao', 'xem phim'];

// Cập nhật danh sách sở thích bằng spread operator
sothich = [...sothich,"1234", ...sothichMoi];
console.log('Danh sách sở thích cập nhật:', sothich);

//=============================
//2.Thông tin người dùng ban đầu
//thông tin người dùng ban đầu
let user = {
    id: 1,
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    role: 'member',
};

// Thong tin cập nhật
const updatedUser = {
    address: '123 Đường ABC, Quận 1, TP.HCM',
    role: 'admin',
};

user = {...updatedUser,...user};// vì update nên role phía sau sẽ ghi đè role phía trước
    
console.log('Thông tin người dùng cập nhật:', user);