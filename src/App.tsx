import { ChangeEvent, useEffect, useState } from "react";
import {
  getCountCorrectPositions,
  getEmptySpaceIndex,
  getRandomSeq,
  getResultSeq,
} from "./helpers";
import "./App.css";
import Board from "./components/Board";

const MATRIX_SIZE = 4;

function App() {
  const [size, setSize] = useState(MATRIX_SIZE);
  const result = getResultSeq(size * size);
  const randomNumbers = getRandomSeq(size * size);
  const [values, setValues] = useState(randomNumbers);

  const countCorrectPos = getCountCorrectPositions(values, result);

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

  if (countCorrectPos === values.length - 1) {
    alert("You win!");
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
        max={7}
        value={size}
        onChange={handleSizeChange}
      />
      <div>Correct Position: {countCorrectPos}</div>
    </>
  );
}

export default App;
