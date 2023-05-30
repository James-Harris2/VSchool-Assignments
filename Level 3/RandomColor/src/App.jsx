import { useEffect, useState } from "react";

const ColorComponent = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const generateRandomColor = () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    };

    generateRandomColor();
  }, []);

  const divStyle = {
    backgroundColor: `#${color}`,
    width: "200px",
    height: "200px",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
  };

  return <div style={divStyle}></div>;
};

export default ColorComponent;
