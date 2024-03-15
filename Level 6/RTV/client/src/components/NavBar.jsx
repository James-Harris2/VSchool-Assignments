
import { Link } from "react-router-dom";


function Navbar(props){

    const { logout } = props

    return(
        <nav className="nav-container">
            <Link to='/posts' className="nav-link">Posts</Link>
            <Link to='/profile' className="nav-link">Profile</Link>
            <button onClick={logout}>Log Out</button>
        </nav>
    )
}

export default Navbar