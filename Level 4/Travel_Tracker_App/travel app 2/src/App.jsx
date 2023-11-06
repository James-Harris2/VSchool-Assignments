// Route settings
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Carousel from "./pages/Carousel";

import Navbar from "./pages/Navbar";

import GMapsApi from "./pages/GMapsApi";

import Login from './pages/Login';
import About from "./pages/About";

import Footer from "./pages/Footer";


//  Add 3 separated routes here button 



function App (){




  return (
<ChakraProvider>

    <Router>  

       
           
          <div className="App" >
<Navbar />
            <nav>
              <ul>
                <li>
                  <Link to="/">Carousel</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/GMapsApi">GMapsApi</Link>
                </li>
              </ul>
            </nav>
            <Routes> 
            <Route path="/" element={<Carousel />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/about"  element={<About />} />
            <Route path="/GMapsApi"  element={<GMapsApi />} />
        </Routes>
<Footer />
          </div>
          
        </Router>
</ChakraProvider>
  )
}

export default App;