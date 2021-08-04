import React, { Fragment } from 'react'
import Payment from './Payment/Payment'
import './Payments.css'

const payments = (props) => {
    let payments = null
    if(props.payments){
        payments = props.payments.map(payment => 
            <Payment key={payment.id}
                    amount={payment.amount}
                    date={payment.date}
                    purpose={payment.purpose}
                    fromAccount={payment.fromAccount}
                    toAccount={payment.toAccount}
                    type={payment.type} />)
    }

    return (
        <Fragment>
            <h1 className="display-4 mt-3">Payments</h1>
            <hr/>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Purpose</th>
                        <th>Sender</th>
                        <th>Recipient</th>
                    </tr>
                </thead>
                <tbody>
                    {payments}
                </tbody>
            </table>
        </Fragment>
    )
}

export default payments