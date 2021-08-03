import React, { Fragment } from 'react'
import AccountInfo from '../../components/AccountInfo/AccountInfo'
import Payments from '../../components/Payments/Payments'

const account = () => {
    return(
        <Fragment>
            <AccountInfo/>
            <Payments/>
        </Fragment>
    )
}

export default account