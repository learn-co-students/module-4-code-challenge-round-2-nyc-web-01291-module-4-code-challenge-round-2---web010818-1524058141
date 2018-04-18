import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const URL =  'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      data: [],
      searchValue: ''
    }

  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(json => this.setState({data: json}))
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <Search handleChange={this.handleChange} searchValue={this.state.searchValue}/>
        <TransactionsList data={this.state.data} searchValue={this.state.searchValue}/>
      </div>
    )
  }
}

export default AccountContainer
