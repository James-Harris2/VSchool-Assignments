import { useState, useEffect } from 'react';


const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6"];

function useBackGroundColor() {

    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex(colorIndex === colors.length - 1? 0 : colorIndex + 1);
        }, 3000);
        return () => clearInterval(interval);
    },  [colorIndex]);
    
    return colors[colorIndex];
}

export default useBackGroundColor;