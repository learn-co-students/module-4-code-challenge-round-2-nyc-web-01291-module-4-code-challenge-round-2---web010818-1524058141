import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import {transactions} from '../transactionsData'

const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {


    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API



  state = {
    transactions: transactions,
    query: ''
  }

  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({transactions: json}))
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
    console.log(this.state.query)
  }

  renderTransactions = () => {
    let filteredTransactions = this.state.transactions.filter(transaction=> this.matchesDescription(transaction) || this.matchesCategory(transaction) )
    return filteredTransactions
  }

  matchesDescription = (transaction) => {
    return transaction.description.toLowerCase().includes(this.state.query.toLowerCase())
  }

  matchesCategory = (transaction) => {
    return transaction.category.toLowerCase().includes(this.state.query.toLowerCase())
  }




  // filter through transactions
  // find transactions where description or category includes query

  render() {

    return (
      <div>
        <TransactionsList handleChange={this.handleChange} transactions= {this.renderTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
