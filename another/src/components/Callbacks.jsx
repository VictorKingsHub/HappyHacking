import React from 'react'
import { useState } from 'react'

function Callbacks() {

  const [data, setData] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      console.log(json[1].address)
    })
  }

  return (
    <div>
      <h1> FETCHING </h1>
        <button onClick = {fetchData}> Fetch data</button>
        <div> {JSON.stringify(data)} </div>
    </div>
  )
}

export default Callbacks
