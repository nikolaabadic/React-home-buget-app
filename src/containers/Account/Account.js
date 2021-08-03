import React, { Fragment } from 'react'
import AccountInfo from '../../components/AccountInfo/AccountInfo'
import Payments from '../../components/Payments/Payments'

const account = () => {
    return(
        <Fragment>
            <AccountInfo
                currency="RSD" type="Current" number="1000-2000-3000" amount="0"/>
            <Payments/>
        </Fragment>
    )
}

export default account