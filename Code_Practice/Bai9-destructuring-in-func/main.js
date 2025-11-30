//giả sử có 1 đối tượng đơn hàng
const order = {
    madonhang: 1,
    tiente:"VND",
    tongtien: 1000000,
};

const donHang2 = {
    madonhang: 2,
    tiente:"USD",
    tongtien: 200,
};

//1.ko sử dụng destructuring
function xuLyDonHang(a) {
    const madonhang = a.madonhang;
    const tiente = a.tiente;
    const tongtien = a.tongtien;

    console.log(`Mã đơn hàng: ${madonhang}`);
    console.log(`Tiền tệ: ${tiente}`);
    console.log(`Tổng tiền: ${tongtien}`);
}

//gọi hàm
// xuLyDonHang(donHang2);
// xuLyDonHang(order);

//2.sử dụng destructuring
function xuLyDonHang2({madonhang, tiente, tongtien}) {
    console.log(`Mã đơn hàng: ${madonhang}`);
    console.log(`Tiền tệ: ${tiente}`);
    console.log(`Tổng tiền: ${tongtien}`);
}

//gọi hàm
xuLyDonHang2(order);
xuLyDonHang2(donHang2);

//3. sử dụng destructuring với giá trị mặc định
function xuLyDonHang3({madonhang = 0, tiente = "VND", tongtien = 0}) {
    console.log(`Mã đơn hàng: ${madonhang}`);
    console.log(`Tiền tệ: ${tiente}`);
    console.log(`Tổng tiền: ${tongtien}`);
}

//gọi hàm xử lý đơn hàng thiếu thuộc tính
//xuLyDonHang3({madonhang: 3, tongtien: 500000});
xuLyDonHang3({madonhang: 4});

//4. Sử dụng destructuring với rest parameter
function xuLyDonHang4({madonhang, ...rest}) {
    console.log(`Mã đơn hàng: ${madonhang}`);
    console.log(rest);
}

//gọi hàm
xuLyDonHang4({
    madonhang: 5,
    tiente: "EUR",
    tongtien: 222,
    khachhang: "Nguyen Van A",
});

function xuLyDonHang5({madonhang: ma, ...rest}) {
    console.log(`Mã đơn hàng: ${ma}`); // dùng tên bí danh alias cho madonhang
    console.log(rest);
}

xuLyDonHang4({
    madonhang: 6,
    tiente: "EUR",
    tongtien: 222,
    khachhang: "Nguyen Van A",
});