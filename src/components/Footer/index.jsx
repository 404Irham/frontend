import React from 'react'
import styles from './index.module.css'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.footer__title}>
                    <h1>Covid ID</h1>
                    <p>Developed by M Irham</p>
                </div>
                <div className={styles.footer__nav}>
                    <ul>
                        <li>Global</li>
                        <li>Indonesia</li>
                        <li>Provinsi</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer