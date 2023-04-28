import React, { useEffect, useState } from 'react'
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import ProjectList from './Components/ProjectList';
import { fetchData } from './FetchApi';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  // fetching url parameters
  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("search")
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const [search, setSearch] = useState(type);
  const [query, setQuery] = useState('pizza');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let value;
    if (search) {
      value = search;
    }
    else {
      value = query;
    }
    fetchData(value, null).then((response) => {
      setLoading(true);
      setList(response.hits);
      setLoading(false);
      // console.log(response, 'jkfhjf');
    });

  }, []);

  return (
    <Router>
      <div className="">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Projects dataList={list} loading={loading} />}></Route>
          <Route exact path="/:slug" element={<ProjectList />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App

