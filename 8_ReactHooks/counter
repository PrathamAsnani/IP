#counter
import React, { useState, useEffect } from 'react';
function Counter() {
const [count, setCount] = useState(0);
useEffect(() => {
console.log(`Count changed: ${count}`);
}, [count]);
const increment = () => {
setCount(prev => prev + 1);
};
const decrement = () => {
setCount(prev => prev - 1);
};
const reset = () => {
setCount(0);
};
return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h2>Count: {count}</h2>
<button onClick={increment}>Increment</button>
<button onClick={decrement} style={{ margin: '0 10px' }}>Decrement</button>
<button onClick={reset}>Reset</button>
</div>
);
}
export default Counter;
