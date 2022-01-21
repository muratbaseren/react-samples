export default function ProductDetail({ val, valState }) {
    return (
        <div>
            <h1>Product Detail Component</h1>
            <hr />

            <div>
                val : {val}
            </div>
            <div>
                <button onClick={() => valState(20)}>Set val to 20</button>
            </div>
        </div>
    );
}