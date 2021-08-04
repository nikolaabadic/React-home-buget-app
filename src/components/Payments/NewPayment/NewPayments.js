import React, { Fragment, Component } from 'react'
import {connect} from 'react-redux'
import Input from '../../Input/Input'
import * as actions from '../../../store/actions/actions'
import './NewPayment.css'

class NewPayment extends Component{
    state = {
        payment: {
            date: '',
            fromAccount: '',
            toAccount: '',
            purpose: '',
            model: 0,
            referenceNumber: '',
            amount: 0,
            type: 'income'
        }
    }

    inputChangedHandler = (event, inputId) => {
        const updatedPayment = {
            ...this.state.payment
        }
        const updatedElement =event.target.value
        updatedPayment[inputId] = updatedElement
 
        this.setState({payment: updatedPayment})
    }

    paymentHandler = (event) =>{
        event.preventDefault()

        this.props.onCreatePayment(this.state.payment)
    }

    render(){
        const formElements = []
        for(let key in this.state.payment){
            formElements.push({
                id: key,
                config: this.state.payment[key]
            })
        }

        const form = (
            <div className="row">
                <form className="payment" onSubmit={this.paymentHandler}>
                    <div>
                        <Input label="Date" type="date" value={this.state.date} changed={(event) => this.inputChangedHandler(event, 'date')}/>
                        <Input label="From Account" value={this.state.fromAccount} changed={(event) => this.inputChangedHandler(event, 'fromAccount')} />
                        <Input label="Recipient Account Number" value={this.state.toAccount} changed={(event) => this.inputChangedHandler(event, 'toAccount')}/>
                    </div>
                    <div>
                        <Input label="Purpose" value={this.state.purpose} changed={(event) => this.inputChangedHandler(event, 'purpose')} />
                        <Input label="Model" value={this.state.model} changed={(event) => this.inputChangedHandler(event, 'model')} />
                        <Input label="Reference Number" value={this.state.referenceNumber} changed={(event) => this.inputChangedHandler(event, 'referenceNumber')}/>
                    </div>
                    <div className="final-column">
                        <Input label="Amount" type="number" min="0" value={this.state.amount} changed={(event) => this.inputChangedHandler(event, 'amount')}/>
                        <div className="form-group">
                            <label className="control-label">Type</label>
                            <select className="form-control" onChange={(event) => this.inputChangedHandler(event, 'type')} >
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>

                        <div className="form-group create pt-4">
                            <input type="submit" value="Create" className="btn btn-primary" />
                        </div>

                    </div>
                </form>
            </div>
        )

        return(
            <Fragment>
            <h1 className="display-4 mt-3">New payment</h1>
            <hr />
            {form}
        </Fragment>
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        onCreatePayment: (data) => dispatch(actions.createPayment(data))
    }
}

export default connect(null, mapDispatchToProps)(NewPayment)