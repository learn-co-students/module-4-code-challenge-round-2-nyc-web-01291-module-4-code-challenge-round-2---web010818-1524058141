import React from 'react'

class Transaction extends React.Component {

  render() {

    return (
      <tr>
        <td>{this.props.transactionInfo.posted_at}</td>
        <td>{this.props.transactionInfo.description}</td>
        <td>{this.props.transactionInfo.category}</td>
        <td>{this.props.transactionInfo.amount}</td>
      </tr>
    )
  }

}

export default Transaction
