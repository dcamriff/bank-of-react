import React, {Component} from 'react'
import AccountBalance from './AccountBalance'
import Link from 'react-router-dom/Link';

class Home extends Component {
    render() {
        return (
            <div>
                <img
                    width="200"
                    src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png"
                    alt="bank"/>
                <h1>Bank of React</h1>

                <div>
                <Link to="/userProfile">User Profile</Link>
                </div>
                <div>
                    <Link to="/credits">Credits</Link>
                </div>
                <div>
                    <Link to="/debits">Debits</Link>
                </div>

                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>

        )
    }
}

export default Home