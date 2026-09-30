import React from 'react'
import { useNavigate } from 'react-router-dom'
const Lab = () => {
    const navigate= useNavigate();

    function navigateHandler()
    {
        navigate('/Support');
    }

    function BackHandler()
    {
        navigate(-1);
    }
  return (
    <div>Lab
        <button onClick={navigateHandler}>Move To Support Page</button>
        <button onClick={BackHandler}>Go Back</button>
    </div>
  )
}

export default Lab