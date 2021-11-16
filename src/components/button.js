const button = ({ text = "Default text", color = "yellow", OnClickedProp }) => {
  return (
    <div>
      <button
        className="button"
        onClick={OnClickedProp}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default button;
