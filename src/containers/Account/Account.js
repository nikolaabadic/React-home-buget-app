import React, { Fragment, Component } from 'react'
import {connect} from 'react-redux'
import AccountInfo from '../../components/AccountInfo/AccountInfo'
import Payments from '../../components/Payments/Payments'
import * as actions from '../../store/actions/actions'

class Account extends Component {
    componentDidMount(){
        this.props.onGetAllPayments()
    }

    render(){
        return(
            <Fragment>
                <AccountInfo
                    currency="RSD" type="Current" number="1000-2000-3000" amount={this.props.amount}/>
                <Payments payments={this.props.payments}/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return{
        payments: state.payments,
        amount: state.amount
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onGetAllPayments: () => dispatch(actions.getPayments()),
        onGetAmount: () => dispatch(actions.getAmount())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Account)