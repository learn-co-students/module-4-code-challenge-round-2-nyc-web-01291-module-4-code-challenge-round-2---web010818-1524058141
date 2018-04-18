import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const BASE_URL = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      data: [],
      searchValue: "",
      searching: false
    }
  }

  componentDidMount = () => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(json => this.setState({
        data: json
      }))
  }

  handleChange = (event) => {
    // your code here
    this.setState({
      searchValue: event.target.value,
      searching: true
    })
  }

  showTransactions = () => {
    if(!this.state.searching) {
      return <TransactionsList transactions={this.state.data}/>
    } else {
      let filteredTransactions = this.state.data.filter(transactions => {
        return transactions.category.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })
      return <TransactionsList transactions={filteredTransactions} />
    }
  }

  render() {
    return (
      <div>
        <Search typedValue={this.handleChange}/>
        {this.showTransactions()}
      </div>
    )
  }
}

export default AccountContainer
