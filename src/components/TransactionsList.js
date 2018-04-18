import React from 'react';
import Transaction from './Transaction';

const TransactionsList = (props) => {
  let transactions = props.transactions

  const renderTransactions = () => {
    if (props.query === "") {
      return transactions.map(transaction =>
        {return ( <Transaction key={transaction.id} transaction={transaction}/>
          // <tr key={transaction.id}>
          //   <td>{transaction.posted_at}</td>
          //   <td>{transaction.description}</td>
          //   <td>{transaction.category}</td>
          //   <td>{transaction.amount}</td>
          // </tr>
        )}
      )
    } else {
      let queried = transactions.filter(transaction => transaction.description.toLowerCase().includes(props.query.toLowerCase()) || transaction.category.toLowerCase().includes(props.query.toLowerCase()))
      return queried.map(transaction =>
        {return ( <Transaction key={transaction.id} transaction={transaction}/>
          // <tr key={transaction.id}>
          //   <td>{transaction.posted_at}</td>
          //   <td>{transaction.description}</td>
          //   <td>{transaction.category}</td>
          //   <td>{transaction.amount}</td>
          // </tr>
        )}
      )
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

        {/* {"... your code here..."} */}
        {renderTransactions()}

      </tbody>
    </table>
  )
}

export default TransactionsList
