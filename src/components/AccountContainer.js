import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactionsData: transactions,
      searchTerm: ''
    }
  }

  componentDidMount = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then((json) => this.setState({
      transactionsData: json
    }))
  }

  handleChange = (event) => {
  this.setState({
    searchTerm: event.target.value
  })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList state={this.state} data={this.state.transactionsData}/>
      </div>
    )
  }
}

export default AccountContainer
