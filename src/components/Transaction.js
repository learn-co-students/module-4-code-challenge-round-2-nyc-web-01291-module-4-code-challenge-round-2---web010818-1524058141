import React from 'react'

const Transaction = (props) => {

  return (
    <tr>
      <td>{props.thing.posted_at}</td>
      <td>{props.thing.description}</td>
      <td>{props.thing.category}</td>
      <td>{props.thing.amount}</td>
    </tr>
  )
}

export default Transaction
