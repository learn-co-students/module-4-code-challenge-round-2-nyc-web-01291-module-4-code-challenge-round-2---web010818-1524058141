import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
      this.state = {
        data: [],
        search: ""
      }
  }

  componentDidMount(){
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        data: json
      })
    })
  }


  renderTrans = () => {
    return this.state.data.filter(tran => {
      return tran.description.toLowerCase().includes(this.state.search.toLowerCase()) || tran.category.toLowerCase().includes(this.state.search)
    }).map(tran => {
      return <TransactionsList key={ tran.id } data={ tran }/>
    })
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
      console.log(this.state.search)

  }

  render() {
    // console.log(this.state.data)

    return (
      <div>
        <Search handleChange={ this.handleChange }/>
        { this.renderTrans() }

      </div>
    )
  }
}

export default AccountContainer
