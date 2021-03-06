import "../../styles/components/BrushSizeButton.scss";

export default function BrushSizeSelector(props) {
  const sizes = [4, 12, 30, 50];

  const brushSizes = sizes.map((size, index) => {
    return (
      <BrushSizeButton
        active={size === props.currentBrushSize}
        key={index}
        size={size}
        selectBrushSize={props.selectBrushSize}
      />
    );
  });

  return <div className="d-flex justify-content-end">{brushSizes}</div>;
}

const BrushSizeButton = (props) => {
  let activeStyle;
  if (props.active) {
    activeStyle = {
      border: "2px solid black",
      backgroundColor: "#ebab34",
      color: "black",
    };
  }

  const brushIconStyle = {
    width: `${props.size}px`,
    height: `${props.size}px`,
    borderRadius: "50%",
    backgroundColor: "black",
  };

  return (
    <button
      style={activeStyle}
      onClick={() => props.selectBrushSize(props.size)}
      className="brush-size-button d-flex align-items-center justify-content-center btn btn-outline-secondary me-1"
    >
      <div style={brushIconStyle}></div>
    </button>
  );
}