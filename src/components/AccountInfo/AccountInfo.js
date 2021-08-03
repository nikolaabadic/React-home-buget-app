import React, { Fragment } from 'react'
import card from '../../assets/img/card.png'
import styles from './AccountInfo.module.css'

const acountInfo = () => {
    return(
        <Fragment>
            <h1>Account Details</h1>
                <div className={styles.accountDetails}>
                <table className={[styles.row, styles.accountRow].join(' ')}>
                    <tr>
                        <td className="col-sm-2">Currency</td>
                        <td className="col-sm-10"></td>
                    </tr>

                    <tr>
                        <td clasclassNames="col-sm-2">Account type</td>
                        <td className="col-sm-10"></td>
                    </tr>

                    <tr>
                        <td className="col-sm-2">Account number</td>
                        <td className="col-sm-10"></td>
                    </tr>

                    <tr>    
                        <td className="col-sm-2">Amount</td>
                        <td className="col-sm-10"></td>
                    </tr>
                </table>
            <img className={styles.cardImg} src={card} alt="Credit card"/>
            <div className={styles.creditCards}>
                {/* @if (Model.CreditCards == null || Model.CreditCards.Count == 0)
                {
                    <h4>No credit cards connected to this account.</h4>
                }
                else
                {
                    <h4>Credit cards connected to this account</h4>
                    foreach (var c in Model.CreditCards)
                    {
                        <h5>@c.CreditCardNumber</h5>
                    }
                } */}
            </div>

        </div>
        </Fragment>
    )
}

export default acountInfo