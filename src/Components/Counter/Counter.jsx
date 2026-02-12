import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Der er klikket ${count} gange`;
    console.log('kliks:', count);
  }, [count]);

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
