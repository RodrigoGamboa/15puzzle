import { ChangeEvent, useEffect, useState } from "react";
import { getEmptySpaceIndex, getRandomSeq } from "./helpers";
import "./App.css";
import Board from "./components/Board";

const MATRIX_SIZE = 4;

function App() {
  const [size, setSize] = useState(MATRIX_SIZE);
  const randomNumbers = getRandomSeq(size * size);
  const [values, setValues] = useState(randomNumbers);

  function shuffle() {
    setValues(getRandomSeq(size * size));
  }

  function handleClick(index: any) {
    // TODO: Refactor when getEmptySpaceIndex gets updated
    const emptySpaceIndex = getEmptySpaceIndex(values, index);
    setValues((prev) => {
      const arr = [...prev];
      if (emptySpaceIndex !== null) {
        const prevVal = prev[index];
        arr[index] = prev[emptySpaceIndex];
        arr[emptySpaceIndex] = prevVal;
      }
      return arr;
    });
  }

  function handleSizeChange(event: ChangeEvent<HTMLInputElement>) {
    setSize(Number(event.target.value));
  }

  useEffect(() => {
    shuffle();
  }, [size]);

  return (
    <>
      <Board size={size} values={values} handleClick={handleClick} />
      <button onClick={shuffle}>Shuffle</button>
      <input
        type="number"
        id="size"
        name="size"
        min={3}
        max={10}
        value={size}
        onChange={handleSizeChange}
      />
    </>
  );
}

export default App;
