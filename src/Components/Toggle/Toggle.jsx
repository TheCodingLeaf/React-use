import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>

      {isVisible && <p>Boo!!!</p>}
    </div>
  );
}

export default Toggle;