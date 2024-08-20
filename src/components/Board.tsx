import Tile from "./Tile";

interface Props {
  size: number;
  values: number[];
  handleClick: (index: number) => void;
}

function Board({ size, values, handleClick }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
      }}
    >
      {values.map((value, index) => (
        <div key={index}>
          <Tile value={value} index={index} handleClick={handleClick} />
        </div>
      ))}
    </div>
  );
}

export default Board;
