import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
console.log(props.data)


  const renderStuff = () => {
    let filteredData = props.data.filter(data => {
      return data.category.includes(props.searchValue) || data.description.includes(props.searchValue)
    })

    return filteredData.map(thing => {
      return <Transaction thing={thing} />
    })
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
        {renderStuff()}
      </tbody>
    </table>
  )
}

export default TransactionsList
