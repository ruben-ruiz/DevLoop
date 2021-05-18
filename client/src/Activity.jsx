import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Activity = () => {
  const [getChallenges, setChallenges] = useState('');

  const getCodeWarsChallenges = () => {
    axios.get(`https://www.codewars.com/api/v1/users/ruben-ruiz/code-challenges/completed`)
    .then(response => setChallenges(response.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getCodeWarsChallenges();
  }, []);

  return (
    <div className="activity">
      {getChallenges ? getChallenges.data.map((challenge,index) => {
        return (<div key={index} className="post">
          <p>ruben ruiz</p>
          <p>posted 1 min ago</p>
          <p>Completed: {challenge.name}</p>
          <p>using: {challenge.completedLanguages[0]}</p>
          <p>Completed At: {challenge.completedAt}</p>
        </div>)
      }) : <></>}
    </div>
  )
}

export default Activity;
