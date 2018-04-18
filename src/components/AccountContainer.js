import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactionData: [],
      searchQuery: ''
    }
  }

  componentDidMount = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(json => this.setState({
        transactionData: json
      }))
  }

  renderTransactions = () => {
    this.state.transactionData.map(transaction => transaction)
  }

  handleChange = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  filterTransactions = () => {
    this.filterTransactionCats()
    return this.state.transactionData.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchQuery.toLowerCase()))

  }

  filterTransactionCats = () => {
    return this.state.transactionData.filter(transaction => transaction.category.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
  }

  render() {
    console.log(this.state.transactionData)
    return (
      <div>
        <Search
          handleChange={this.handleChange} />
        {this.state.searchQuery === '' ?
          <TransactionsList transactions={this.state.transactionData} /> :
          <TransactionsList transactions={this.filterTransactions()} />}
      </div>
    )
  }
}

export default AccountContainer
