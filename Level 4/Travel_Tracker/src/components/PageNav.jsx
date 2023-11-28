import { NavLink } from "react-router-dom";
import styles from './PageNav.module.css';


function PageNav() {
  return (

    <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to="/">Welcome</NavLink>
            </li>
            
            <li>
                <NavLink to="spots">Spots</NavLink>
            </li>

            <li>
                <NavLink to="/Product">Products</NavLink>
            </li>
        </ul>
    </nav>


    )
}

export default PageNav