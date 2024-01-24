import { useState } from "react";
import { Counter } from "./counter";

export const CounterContainer = ({
  selectedProduct,
  stock,
  onAdd,
  initial = 0,
}) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetear = () => {
    if (counter > 0) {
      setCounter(0);
    }
  };

  return (
    <Counter
      sumar={sumar}
      restar={restar}
      counter={counter}
      onAdd={onAdd}
      initial={initial}
      selectedProduct={selectedProduct}
      resetear={resetear}
    />
  );
};
