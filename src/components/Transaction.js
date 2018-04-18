import React from 'react'

const Transaction = (props) => {
  console.log(props.passedTransaction)
  return (
    <tr>
      <td>{props.passedTransaction.posted_at}</td>
      <td>{props.passedTransaction.description}</td>
      <td>{props.passedTransaction.category}</td>
      <td>{props.passedTransaction.amount}</td>
    </tr>
  )
}

export default Transaction
