import React, { Component } from 'react'
import Debit from './Debit'

const DebitsList = (props) => {
    const debitComponents = props.debits.map((credit, index) => {
        return
        <Debit
            description={debit.description}
            amount={debit.amount}
            date={debit.date}
            key={index}/>
        })

        return (
            <div>
                {debitComponents}
            </div>
        )
}

export default DebitsList