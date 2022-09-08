import React, { useState } from "react";

export const InputNumber = ({ setNumber }) => {
  const [num, setNum] = useState(6);
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => setNumber(num)}>Valider</button>
    </div>
  );
};
