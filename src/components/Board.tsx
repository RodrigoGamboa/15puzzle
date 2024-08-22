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
        backgroundColor: "#908783",
        border: "5px solid #CDDDD2",
      }}
    >
      {values.map((value, index) => {
        return (
          <div key={index}>
            <Tile value={value} index={index} handleClick={handleClick} />
          </div>
        );
      })}
    </div>
  );
}

export default Board;
