import React, { useState } from 'react';
import './HornedBeast.css';

export default function HornedBeast(props) {  
  const [love, setLove] = useState(0)

  function handleBeastLove(){
    setLove(love+1)
  }

  return (
    <div className='beast'>
      <h2 className='beast-title'>{props.title}</h2>
      <img className='beast-image' src={props.image} alt={props.title} onClick={() => (props.openModal(props.wholebeast))}></img>
      <p className='beast__description'>{props.description}</p>
      <p onClick={handleBeastLove}>Has been ❤️ {love} times</p>
      
    </div>
  )
}

 
