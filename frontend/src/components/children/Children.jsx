import React from 'react';
import './children.css';
import useRefreshToken from '../../hooks/useRefreshToken';
const Children = () => {
  const refresh = useRefreshToken();
  return (
    <div>
      Children
      <button onClick={refresh}>REFRESH</button>
    </div>    
  )
}

export default Children
