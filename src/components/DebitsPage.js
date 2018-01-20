import React, { Component } from 'react'

import DebitsList from './DebitsList'
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom'
import NewDebitForm from './NewDebitForm'

const DebitsPage = (props) => {
    return (
        <div>
            <h1>Debits</h1>
            <Link to="/">Back to Home</Link>

            <AccountBalance accountBalance={props.accountBalance}/>

            <NewDebitForm addNewDebit={props._addNewDebit}/>
            <br/>

            <DebitsList debits={props.debits}/>            
        </div>
    )
}

export default DebitsPage