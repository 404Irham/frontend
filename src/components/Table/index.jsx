import React from 'react'

function Table(props) {
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.kota}</td>
            <td>{props.kasus}</td>
            <td>{props.sembuh}</td>
            <td>{props.dirawat}</td>
            <td>{props.meninggal}</td>
        </tr>
    )
}

export default Table