import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Klik mig
      </button>
      <p>Der er klikket {count} gange</p>
    </div>
  );
}

export default Counter;
