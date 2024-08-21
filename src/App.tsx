import { useState } from "react";
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

  console.log(values);

  return (
    <>
      <Board size={size} values={values} handleClick={handleClick} />
      <button onClick={shuffle}>Shuffle</button>
    </>
  );
}

export default App;
