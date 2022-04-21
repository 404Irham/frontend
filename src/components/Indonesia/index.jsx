import React from 'react'
import Card from '../Card'
import styles from './index.module.css'
import data from '../../utils/constants/indonesia'

function Indonesia() {
  return (
      <div className={styles.container}>
          <div className={styles.indonesia}>
              <div className={styles.indonesia__title}>
                  <h1>Indonesia</h1>
                  <p>Data Covid Berdasarkan Global</p>
              </div>
              <div className={styles.indonesia__card}>
                  {data.indonesia.map((data) => (
                  <Card key={data.status} status={data.status} total={data.total} />                      
                  ))}
              </div>
          </div>
      </div>
  )
}

export default Indonesia