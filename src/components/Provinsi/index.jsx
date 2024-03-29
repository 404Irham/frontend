import React from 'react'
import Table from '../Table'
import styles from './index.module.css'

function Provinsi(props) {

    const { provinces } = props;


    return (
        <div className={styles.container}>
            <div className={styles.provinsi}>
                <div className={styles.provinsi__title}>
                    <h1>Provinsi</h1>
                    <p>Data Covid Berdasarkan Global</p>
                </div>
                <div className={styles.provinsi__table}>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Provinsi</th>
                                <th>Positif</th>
                                <th>Sembuh</th>
                                <th>Dirawat</th>
                                <th>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {provinces.map((data, index) => (
                                <Table index={index} key={data.kota} kota={data.kota} kasus={data.kasus} dirawat={data.dirawat} sembuh={data.sembuh} meninggal={data.meninggal} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Provinsi