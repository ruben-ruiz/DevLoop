import React from 'react';

const Sidebar = ({githubInfo}) => {
  const renderPage =
    githubInfo ?
    <>
    <img src={githubInfo.avatar_url} alt="profile" />
    <h1>{githubInfo.name}</h1>
    <p>{githubInfo.email}</p>
    <p>{githubInfo.location}</p>
    <p>{githubInfo.company}</p>
    <a href={githubInfo.blog}>{githubInfo.blog}</a>
    <p>{githubInfo.bio}</p>
    </> : <></>

  return (
    <div className="sidebar">
      {renderPage}
    </div>
  )
}

export default Sidebar;
