import React, { Fragment } from 'react'
import Payment from './Payment/Payment'
import './Payments.css'

const payments = () => {
    return (
        <Fragment>
            <h1 className="display-4 mt-3">Payments</h1>
            <hr/>
            <table class="table">
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
                <Payment/>
                <Payment/>
                <Payment/>
            </table>
        </Fragment>
    )
}

export default payments