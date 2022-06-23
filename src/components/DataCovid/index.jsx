/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Card from '../Card'
import styles from './index.module.css'
import axios from 'axios';

function DataCovid({URL}) {
    const [response, setResponse] = useState();

    async function getDataCovid() {
        const response = await axios(URL);

        const dataCovid = [
                  {
                    status: "Confirmed",
                    ...response.data.confirmed,
                  },
                  {
                    status: "Deaths",
                    ...response.data.deaths,
                  },
                  {
                    status: "Recovered",
                    ...response.data.recovered,
                  },
                ];

                setResponse(dataCovid);

    }

  useEffect(getDataCovid, []);

  return (
      <div className={styles.container}>
          <div className={styles.dataCovid}>
              <div className={styles.dataCovid__title}>
                  <h1>Data Covid</h1>
                  <p>Data Covid Berdasarkan Global</p>
              </div>
              <div className={styles.dataCovid__card}>
                  {response && response.map((data) => (
                  <Card key={data.status} status={data.status} total={data.value} />                      
                  ))}
              </div>
          </div>
      </div>
  )
}

export default DataCovid;