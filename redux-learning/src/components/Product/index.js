import ProductDetail from "./ProductDetail";

export default function Product({ val, valState }) {
    return (
        <div>
            <h1>Product Component</h1>
            <hr />

            <div>
                {/* <div>
                    val : {val}
                </div> */}
                <ProductDetail val={val} valState={valState} />
            </div>
        </div>
    );
}