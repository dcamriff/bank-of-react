import React, {Component} from 'react'

class NewCreditForm extends Component {

    constructor(props) {

    this.defaultState = {
        newCredit: {
        amount: 0.00,
        description: '',
        date: Date.now()
        }
    }

    this.state = {...this.defaultState}
    }

    _handleInputChange = (event) => {
        const attribute = event.target.name
        let value = event.target.value

        if (attribute === 'amount') {
            value = Number(value)
        }
        const newCredit = {...this.state.newCredit}
        newCredit[attribute] = value

        this.setState({newCredit})
    }


    render () {
        return (
            <div>

            </div>
        )
    }
}

export default NewCreditForm