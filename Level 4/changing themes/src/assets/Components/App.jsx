import React, {useState} from 'react';
import Button from "./assets./Components./Button";
import Header from './Header'
import theme_with_context from './theme_with_context';

// function takes in theme_w_context |  Button | Header
// changes color of app from Dark to Light
function App (props) {

return (
  // wrap ThemeContextProvider || empty DiV

  <>
  <theme_with_context.Provider value={{
    color: color,
    toggleTheme: toggleTheme
  }}>
    <Header/>
    <Button/>
  </theme_with_context.Provider>
  </>

)
}

export default App;