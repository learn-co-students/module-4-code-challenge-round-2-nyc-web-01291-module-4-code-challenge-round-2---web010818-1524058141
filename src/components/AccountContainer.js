import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions : [],
      search : ""
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(res => this.setState({transactions: res}))
  }

  handleChange = (event) => {
    this.setState({search : event.target.value})
  }

  filterTransactions = () => {
    if(this.state.search){
      return this.state.transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(this.state.search) ||
        transaction.category.toLowerCase().includes(this.state.search)
      )
    }else{
      return this.state.transactions
    }
  }

  render() {

    return (
      <div>
        <Search handleSearch={this.handleChange}/>
        <TransactionsList transactions={this.filterTransactions()}/>
      </div>
    )
  }
}


export default AccountContainer
