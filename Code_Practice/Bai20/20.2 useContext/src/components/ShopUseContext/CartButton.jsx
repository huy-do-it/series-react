import { useContext } from "react";
import CartContext from "./CartContext";
export default function CartButton() {
    const {cartCount, handleCart} = useContext(CartContext);
    return (
        <div>
            <button onClick={handleCart}>Thêm vào giỏ hàng</button>
            <p>Hiển thị một só sản phẩm trong CartButton: {cartCount}</p>
        </div>
    );

}