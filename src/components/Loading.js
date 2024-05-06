import React from 'react'
import"./load.css"
import { useNavigate } from 'react-router-dom';
function Loading() {
    const nav = useNavigate()
  return (
    <div className='lcontainer'>
          <h1>Loading......</h1>
          <button className='home-btn' onClick={()=> nav("/")}>Home</button>
    </div>
  );
}

export default Loading