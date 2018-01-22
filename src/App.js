import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
import CreditsPage from './components/CreditsPage'
import DebitsPage from './components/DebitsPage'

import axios from 'axios'

class App extends Component {

  state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      },
      credits: [],
      debits: []
    }

    getCredits = () => {
      axios.get('http://localhost:4000/credits')
      .then((response) => {
        const credits = response.data
        this.setState({credits})
      })
    }

    mockLogIn = (logInInfo) => {
      const newUser = {...this.state.currentUser}
      newUser.userName = logInInfo.userName
      this.setState({currentUser: newUser})
    }

    componentWillMount () {
      this.getCredits()
    }

  render() {
    const accountBalance = this.calculateAccountBalance
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>)
    
    const UserProfileComponent = () => (<UserProfile
      userName={this.state.currentUser.userName}
      memberSince={this.state.currentUser.memberSince}/>)

    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)

    const CreditsPageComponent = () => (<CreditsPage credits={this.state.credits} accountBalance={accountBalance} {...this.props} />)

    const DebitsPageComponent = () => (<DebitsPage credits={this.state.debits} accountBalance={accountBalance} {...this.props} />)


    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link><br/>
            <Link to="/login">Log in</Link>
          </div>
        
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsPageComponent}/>
          <Route exact path="/debits" render={DebitsPageComponent}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App
