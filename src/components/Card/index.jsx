import React from 'react'
import styles from './index.module.css'

function Card(props) {
  return (
      <div className={styles.card}>
          <div className={styles.card__title}>
              <h1>{props.status}</h1>
              <span>{props.total}</span>
          </div>
      </div>
  )
}

export default Card