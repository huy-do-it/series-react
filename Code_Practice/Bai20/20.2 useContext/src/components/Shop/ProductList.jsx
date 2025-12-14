import ProductItem from "./ProductItem";

export default function ProductList({ addToCart }) {
    return (
        <div>
            <h2>danh sách sản phẩm</h2>
            <ProductItem addToCart={addToCart} />
        </div>
    )
}