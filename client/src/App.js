import React, { useState, useEffect } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import ProjectsList from "./components/projects";

function getBaseURL() {
  return process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : ''
}

function App() {
  const [projects, setProjects] = useState([]);
  const [actions, setActions] = useState([]);
  const [error, setError] = useState(null);

  const getData = e => {
    axios
      .get(getBaseURL() + "/api/projects", { id: "" })
      .then(projects => {
        setProjects(projects.data);
        console.log(projects);
      })
      .catch(error => {
        setError(error.message);
      });
    axios
      .get(getBaseURL() + "/api/actions", { id: "" })
      .then(actions => {
        setActions(actions.data);
        console.log(actions);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const handleClick = e => {
    getData();
  };

  const handleEdit = e => {};


  return (
    <div className="App">
<h1>Projects</h1>
<button onClick={handleClick}>See Projects</button>
      <ProjectsList projects={projects} actions={actions} getData={getData} />
    </div>
  );
}

export default App;
