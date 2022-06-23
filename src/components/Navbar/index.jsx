import { NavLink } from 'react-router-dom';
import styles from './index.module.css'

function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navbar__title}>
            <h1>Covid ID</h1>
          </div>
          <div className={styles.navbar__nav}>
            <ul>
              <li>
              <NavLink  to="/">Global</NavLink>
              </li>
              <li>
              <NavLink to="/indonesia">Indonesia</NavLink>
              </li>
              <li>
              <NavLink to="/provinsi">Provinsi</NavLink>
              </li>
              <li>
              <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
