interface Props {
  value: number;
  index: number;
  handleClick: (e: any) => void;
}

function Tile({ value, index, handleClick }: Props) {
  return (
    <button
      style={{
        width: "100px",
        border: "1px solid black",
      }}
      onClick={() => handleClick(index)}
    >
      {value}
    </button>
  );
}

export default Tile;
