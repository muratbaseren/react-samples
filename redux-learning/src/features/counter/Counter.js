import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, incrementByAmountAsync, selectCount } from "./counterSlice";

function Counter() {
    const [amount, setAmount] = useState(0);
    const value = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <br />
            <br />
            <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <span className="result">{value}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <br />
            <br />
            <input value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount({ value: parseInt(amount) }))}>Increment by Amount</button>
            <button onClick={() => dispatch(incrementByAmountAsync({ value: parseInt(amount) }))}>Increment by Amount Async</button>
        </div>
    );
}

export default Counter;