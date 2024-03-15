
import { Link } from "react-router-dom";


function Navbar(props){

    const { logout } = props

    return(
        <nav className="nav-container">
            <Link to='/public' className="nav-link">Public</Link>
            <Link to='/profile' className="nav-link">Profile</Link>
            <button onClick={logout}>Log Out</button>
        </nav>
    )
}

export default Navbar