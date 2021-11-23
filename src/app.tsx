import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hi</h1>
      <h2>now count : {count}</h2>
      <button onClick={() => {setCount(count +1)}}>click me</button>
    </>
    )
};

export default App;
