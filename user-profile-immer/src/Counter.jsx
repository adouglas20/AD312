import { useState } from "react";
import './Counter.css';
function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <p>{count}</p>
            <button className="control-button" onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <button className="control-button" onClick={() => setTimeout(() => setCount(count + 1), 2000)}>
                Increment after delay
            </button>

            <button className="control-button" onClick={() => setCount(count + 2)}>
                Increment Twice
            </button>

            <button className="control-button" onClick={() => {
                setCount(prev => prev + 1)
                setCount(prev => prev + 1)

            }}>
                CorrectIncrement Twice
            </button>
        </div>
    );
}

export default Counter;


