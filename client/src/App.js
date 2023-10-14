import React, {useState, useEffect} from 'react'
// UseState used to create a state var to create data we retreive and render to page
// useEffect used to fetch backend api on first render


function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []) // empty array ensures it only runs once

  return (
    <div>

      {(typeof data.members === 'undefined') ? ( // check is members array is undefined (api still fetching)
        <p>Loading...</p>
      ) : (
        data.members.map((member,i) => ( // once api is fetched; map each member to a p element
          <p key={i}>{member}</p>
        ))
      )}

    </div>
  )
}

export default App