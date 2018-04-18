import React from 'react'

const Search = (props) => {

  const handleChange = (event) => {
    let query = event.target.value
    return props.handleChange(query)
  }

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
