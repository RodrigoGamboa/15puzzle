import { isEven } from "../helpers";

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
          className="tsukimi-rounded-bold"
          style={{
            width: "100px",
            height: "100px",
            border: "5px solid #CDDDD2",
            // backgroundColor:  value === index + 1 ? "limegreen" : "",
            backgroundColor: isEven(value) ? "#D2C4A6" : "#8F0000",
            color: "#CDDDD2",
            fontSize: 24,
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
