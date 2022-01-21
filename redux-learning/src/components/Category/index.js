import Product from "../Product"

export default function Category({ val, valState }) {
    return (
        <div>
            <h1>Category Component</h1>
            <hr />

            <div>
                val : {val}
            </div>
            <div>
                <Product val={val} valState={valState} />
            </div>
        </div>
    );
}