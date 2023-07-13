import { useEffect, useState } from "react";

export default function App() {
  useEffect(() => {
    console.log("test");
  }, []);

  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Pitchers</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        click me
      </button>
    </>
  );
}
