import React from 'react'
import axios from 'axios';

function App() {
  const url = "https://bayut.p.rapidapi.com/properties/list";
  console.log(url, 'ghbvfgh');

  const FetchApi = async (url) => {
    const data = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'iFUdxubHsQmshe51vbzzowIsXzBrp1zQDPGjsnlyuFeYlDeBLs'
      }
    })

    console.log(data);
  }

  FetchApi(url);
  return (
    <div>
      <h1>kljhF</h1>
    </div>
  )
}

export default App

