import React from 'react'
import Payment from './Payment/Payment'

const payments = () => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Amount</th>
                    <th>DateTime</th>
                    <th>Purpose</th>
                    <th>Sender</th>
                    <th>Recipient</th>
                </tr>
            </thead>
            <Payment/>
            <Payment/>
            <Payment/>
        </table>
    )
}

export default payments