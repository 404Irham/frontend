import React, { useState } from 'react'
import data from '../../utils/constants/provinces'
import styles from './index.module.css'

function Form(props) {

    const { provinces, setProvinces } = props;

    const [provinsi, setProvinsi] = useState();
    const [status, setStatus] = useState();
    const [jumlah, setJumlah] = useState();

    function submit(event) {
        event.preventDefault();

        const index = provinces.findIndex((item) => item.kota === provinsi)
        const foundProvince = provinces.find((item) => item.kota === provinsi)


        provinces[index] = {
            ...foundProvince,
            [status]: parseInt(foundProvince[status]) + parseInt(jumlah)
        };

        setProvinces([...provinces])
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.form__left}>
                    <img src="img/form.svg" alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2>Form Covid</h2>
                    <form action="" onSubmit={submit}>
                        <div className={styles.input__group}>
                            <label htmlFor="">Provinsi</label>
                            <select onChange={(e) => setProvinsi(e.target.value)}>
                                <option value="">Pilih Provinsi</option>
                                {data.provinces.map((data) => (
                                    <option key={data.kota} value={data.kota}>{data.kota}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.input__group}>
                            <label htmlFor="">Status</label>
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="">Pilih Status</option>
                                <option value="kasus">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="dirawat">Dirawat</option>
                                <option value="meninggal">Meninggal</option>
                            </select>
                        </div>
                        <div className={styles.input__group}>
                            <label htmlFor="" required="">Jumlah</label>
                            <input onChange={(e) => setJumlah(e.target.value)} />
                        </div>
                        <div className={styles.button}>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form