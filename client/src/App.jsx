import React, {useState, useEffect} from 'react';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';

const App = () => {
  const [githubInfo, setGithubInfo] = useState('');
  const [codeWarsInfo, setCodeWarsInfo] = useState('');

  const getCodeWars = () => {
    axios.get(`https://www.codewars.com/api/v1/users/ruben-ruiz`)
    .then(response => setCodeWarsInfo(response.data))
    .catch(err => console.log(err))
  }

  const getGithub = () => {
    axios.get(`https://api.github.com/users/ruben-ruiz`)
    .then(response => setGithubInfo(response.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getGithub();
  }, []);

  useEffect(() => {
    getCodeWars();
  }, [])

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar githubInfo={githubInfo}/>
      <Content codeWarsInfo={codeWarsInfo}/>
      <Footer />
    </div>
  )
}

export default App;
