import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const restart = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter Using Hooks</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment ➕</button>
      <button onClick={decrement}>Decrement ➖</button>
      <button onClick={restart}>Restart 🔁</button>
    </div>
  );
}
