import React, {useContext} from 'react';
import theme_with_context from './assets/Components/theme_with_context';


function Header(props) {
    const {color} = useContext(ThemeContext)
    console.log(context)
    return (
        <div className={`${context}-theme`}>
            <h2>Theme Context</h2>
            <h3> You're currently using {color}mode</h3>
        </div>
    );
}

export default Header;