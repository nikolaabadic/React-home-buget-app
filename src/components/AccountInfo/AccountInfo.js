import React, { Fragment } from 'react'
import card from '../../assets/img/card.png'
import './AccountInfo.css'

const acountInfo = () => {
    return(
        <Fragment>
            <h1 className="display-4 mt-3">Account Details</h1>
            <hr/>
            <div className="accountDetails">
                <div className="column">
                    <table>
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
                </div>
                <img className="cardImg column" src={card} alt="Credit card"/>
                <div className="creditCards">
                    <p>aufdoo</p>
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