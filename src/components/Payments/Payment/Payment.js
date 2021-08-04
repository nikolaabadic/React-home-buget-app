import React from 'react'
import plusImg from '../../../assets/img/plus.png'
import minusImg from '../../../assets/img/minus.png'

const payment = (props) => {
    let img = <img className="payment-icon" src={plusImg} alt="plus"/>
    if(props.type === 'expense'){
        img = <img className="payment-icon" src={minusImg} alt="minus"/>
    }
    return (
        <tr>
            <td>{img}</td>            
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>{props.purpose}</td>
            <td>{props.fromAccount}</td>
            <td>{props.toAccount}</td>
        </tr>
    )
}

export default payment