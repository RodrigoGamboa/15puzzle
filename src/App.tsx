import { useState } from "react";
import { getRandomSeq } from "./helpers";
import "./App.css";
import Board from "./components/Board";

const MATRIX_SIZE = 3;

function App() {
  const [size, setSize] = useState(MATRIX_SIZE);
  const randomNumbers = getRandomSeq(size * size);
  const [values, setValues] = useState(randomNumbers);

  console.log(values);

  function shuffle() {
    setValues(getRandomSeq(size * size));
  }

  return (
    <>
      <Board values={values} setValues={setValues} />
      <button onClick={shuffle}>Shuffle</button>
    </>
  );
}

export default App;
