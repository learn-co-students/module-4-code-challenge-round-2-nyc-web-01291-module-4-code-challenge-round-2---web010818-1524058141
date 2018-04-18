import React from 'react'
import Transaction from './Transaction.js'

const TransactionsList = (props) => {

  const loadTransactions = (props) => {
    if (props.data) {
      // console.log(props.data)
      const filtered = props.data.filter(transac => transac.description.toLowerCase().includes(props.query) || transac.category.toLowerCase().includes(props.query))
      return filtered.map(transaction => {
        return(
          <Transaction info={transaction}/>
        )
      })
    }
  }

  return (

    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        {loadTransactions(props)}

      </tbody>
    </table>
  )
}

export default TransactionsList
