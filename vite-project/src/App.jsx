import { useState, useEffect } from "react";

// useEffect, dependency array, cleanup
export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount((c) => c + 1);
  }
  function decrease() {
    setCount2((c) => c - 1);
  }

  return (
    <div>
      <Counter count={count} count2={count2} />
      <button onClick={increase}>Increase count</button>
      <button onClick={decrease}>decrease count</button>
    </div>
  );
}

// Mounting, re-rendering, unmounting
function Counter(props) {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []); // empty dependency → runs only once (mount + unmount)

  useEffect(() => {
    console.log("cleanup1");
  }, [props.count]); // runs whenever count updates
  useEffect(() => {
    console.log("cleanup 2");
  }, [props.count2]); // runs whenever count updates

  return (
    <div>
      Count1: {props.count} <br />
      Count2: {props.count2} <br />
    </div>
  );
}
