import {useState} from "react";

export function BasicTest() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      count : {count}<br/>
      <button onClick={() => increment()}>클릭</button>
    </div>
  )
}