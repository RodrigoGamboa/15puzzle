import { Dispatch, SetStateAction } from "react";
import { getEmptySpaceIndex, getPosXY } from "../helpers";
import Tile from "./Tile";

interface Props {
  values: number[];
  setValues: Dispatch<SetStateAction<number[]>>;
}

function Board({ values, setValues }: Props) {
  function handleClick(index: any) {
    // const posXY = getPosXY(values, index);
    const emptySpaceIndex = getEmptySpaceIndex(values, index);
    console.log(emptySpaceIndex);
    setValues((prev) => {
      const arr = prev;
      if (emptySpaceIndex) {
        const prevVal = prev[index];
        arr[index] = prev[emptySpaceIndex];
        arr[emptySpaceIndex] = prevVal;
      }
      return arr;
    });
  }

  return (
    <>
      {values.map((value, index) => (
        <div key={index}>
          <Tile value={value} index={index} handleClick={handleClick} />
        </div>
      ))}
    </>
  );
}

export default Board;
