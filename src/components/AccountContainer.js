import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

URL = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      data: "",
      query: ""
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json
        })
      })
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList query={this.state.query} data={this.state.data}/>
      </div>
    )
  }
}

export default AccountContainer
