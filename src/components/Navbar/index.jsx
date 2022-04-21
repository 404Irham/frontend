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
              <li>Global</li>
              <li>Indonesia</li>
              <li>Provinsi</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
