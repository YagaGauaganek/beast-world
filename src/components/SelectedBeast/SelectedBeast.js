import React from 'react';
import "./SelectedBeast.css";

export default function SelectedBeast({modalContent, closeModal}) {
  return (
    <div className='modal'>
      <div className='beast-modal'>
        <img src={modalContent.image_url} alt={modalContent.tittle}></img>
        <h3>{modalContent.title}</h3>
        <p>{modalContent.description}</p>
        <button className="close button" onClick={closeModal}>X</button>
      </div>
    </div>

  )
}
