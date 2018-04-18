import React from 'react'
import Transaction from './Transaction'

class TransactionsList extends React.Component {

  constructor(props){
    super(props)
    console.log(props)
  }

  renderTransaction = () => {
    return this.props.transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
  }

  render(){
    return (
      <div>
      Search: <input onChange={this.props.handleChange} type="text"/>
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

          {this.renderTransaction()}


        </tbody>
      </table>
      </div>

    )
  }
}

export default TransactionsList
