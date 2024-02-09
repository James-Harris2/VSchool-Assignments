// ButtonComponent.js

import { useState } from 'react';

const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button onClick={handleClick}>
      {clicked ? 'Clicked!' : 'Click Me!'}
    </button>
  );
};

export default Button;
