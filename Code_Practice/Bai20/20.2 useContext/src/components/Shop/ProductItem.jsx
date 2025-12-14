import CartButton from "./CartButton";
export default function ProductItem({ addToCart }) {
    return (
        <div>
            <h3>sản phẩm</h3>
            <CartButton addToCart={addToCart} />
        </div>
    );
}