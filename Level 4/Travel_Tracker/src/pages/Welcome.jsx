// Links to products page
// SPA

import { Link } from 'react-router-dom';
import PageNav from "../components/PageNav";
import styles from "./Welcomepage.module.css"



function Welcome() {
  return (
    <main className={styles.Welcomepage}>
      <PageNav />

      <secion>
        <h1>
          You Travel the World.
          <br/>
        </h1>
        <h3>
          A world map that tracks your footsteps in every city you can think of.
          Never forget your wonderful experience all in 1 once.
          Show your family & friends the world you traveld to. 
        </h3>
        <Link to="/login" className="CallToAction">
          Start tracking now
        </Link>
      </secion>
    </main>
  );

}

export default Welcome