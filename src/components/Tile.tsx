interface Props {
  value: number;
  index: number;
  handleClick: (e: any) => void;
}

function Tile({ value, index, handleClick }: Props) {
  return (
    <>
      {value !== 0 && (
        <button
          style={{
            width: "100px",
            border: "1px solid black",
            backgroundColor: value === index + 1 ? "limegreen" : "",
          }}
          onClick={() => handleClick(index)}
        >
          {value}
        </button>
      )}
    </>
  );
}

export default Tile;
