import React from 'react'
import axios from 'axios';

function App() {
  const url = "https://bayut.p.rapidapi.com/properties/list";
  // console.log(url, 'ghbvfgh');

  const FetchApi = async (url) => {
    const data = await axios.get((url), {
      method: 'GET',
      params: {
        locationExternalIDs: '5002,6020',
        purpose: 'for-rent',
        hitsPerPage: '25',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
        categoryExternalID: '4'
      },

      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '32b08e4b9bmshd92fb6bb44988aap1d6edfjsn155b7476d34e',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    })

    console.log(data.data);
  }

  FetchApi(url);
  return (
    <div>
      <h1>kljhF</h1>
    </div>
  )
}

export default App

