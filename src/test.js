import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import ProjectList from './Components/ProjectList';

function App() {
  const [list, setList] = useState([]);
  const url = "https://bayut.p.rapidapi.com/properties/list";
  // const url = process.env.REACT_APP_API_URL + "/properties/detail";
  // const url = process.env.REACT_APP_API_URL + "auto-complete";

  console.log(url, 'ghbvfgh');

  const FetchApi = async (url) => {
    const data = await axios.get((url), {
      method: 'GET',
      params: {
        query: "abu dhabi",
        // locationExternalIDs: '5002,6020',
        // purpose: 'for-sale',
        hitsPerPage: '15',
        page: '0',
        lang: 'en',
        // externalID: 4711782
      },

      headers: {
        'content-type': process.env.REACT_APP_CONTENT_TYPE,
        'X-RapidAPI-Key': process.env.REACT_APP_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_HOST
      }
    })

    setList(data.data);
    console.log(list);
  }

  useEffect(() => {
    FetchApi(url);
  }, []);

  return (
    <div>
      <Navbar />
      {/* <Projects dataList={list} /> */}
      {/* <ProjectList data={list} /> */}
    </div>
  )
}

export default App

