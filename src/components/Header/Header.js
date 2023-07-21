import React from 'react'
import "./Header.css"

export default function Header({handleBeasts}) {
  return (
    <div className='header'>
      <h1 className='header__heading'>The Horned Beast</h1>
      {/* <form>
        <label className='horns-label' htmlFor='hornsInput'>Select Beast by horns</label>
        <select name='selectedHorns' id="hornsInput" onChange={handleBeasts}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form> */}
    </div>
  )
}
