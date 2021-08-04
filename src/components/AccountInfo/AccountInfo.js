import React, { Fragment } from 'react'
import card from '../../assets/img/card.png'
import './AccountInfo.css'

const acountInfo = (props) => {
    return(
        <Fragment>
            <h1 className="display-4 mt-3">Account Details</h1>
            <hr/>
            <div className="accountDetails pt-3">
                <div className="col">
                    <table>
                        <tbody>
                            <tr>
                                <td className="col-sm-5">Currency:</td>
                                <td className="col-sm-7">{props.currency}</td>
                            </tr>

                            <tr>
                                <td className="col-sm-5">Account type:</td>
                                <td className="col-sm-7">{props.type}</td>
                            </tr>

                            <tr>
                                <td className="col-sm-5">Account number:</td>
                                <td className="col-sm-7">{props.number}</td>
                            </tr>

                            <tr>    
                                <td className="col-sm-5">Amount:</td>
                                <td className="col-sm-7"><strong>{props.amount}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <img className="cardImg" src={card} alt="Credit card"/>
                <div className="creditCards mt-3 pl-4">
                    <h5>Credit cards connected to this account:</h5>
                    <h6>5166-7513-7253-9269</h6>
                    <h6>5350-6114-2519-5715</h6>
                </div>
            </div>
        </Fragment>
    )
}

export default acountInfo