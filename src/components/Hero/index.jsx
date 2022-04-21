import React from 'react'
import styles from './index.module.css'

function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.hero}>
            <div className={styles.hero__left}>
                <img src="img/hero.svg" alt="" />
            </div>
            <div className={styles.hero__right}>
                <div className={styles.hero__title}>
                    <h2>Covid ID</h2>
                    <p>Sistem Monitoring Covid</p>
                </div>
                <div className={styles.hero__text}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a facere corporis nihil maiores rem, sint beatae voluptatum accusantium? Ad odit libero voluptatem? Ducimus non libero tempora eos doloremque. Nostrum.
                    </p>
                </div>
                <div className={styles.hero__button}>
                    <button>Vaccine</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero