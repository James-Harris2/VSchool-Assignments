import React, {useContext} from 'react';

import theme_with_context from './assets/Components/theme_with_context';

// function button that will change the color upon clicking

function Button (props) {
    // initialize the state management
    const {color, toggleTheme} = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme} className={`${color}-theme`}>Changing Themes</button>
    );
}

export default Button;