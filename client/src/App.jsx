import React, {useState, useEffect} from 'react';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';

const App = () => {
  const [githubInfo, setGithubInfo] = useState('');

  useEffect(() => {
    axios.get(`https://api.github.com/users/ruben-ruiz`)
    .then(response => setGithubInfo(response.data))
    .catch(err => console.log(err))
  }, [githubInfo]);

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar githubInfo={githubInfo}/>
      <Content />
      <Footer />
    </div>
  )
}

export default App;
