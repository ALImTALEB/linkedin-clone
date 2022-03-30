import React from 'react'
import './styles/HeaderOption.css'

const HeaderOption = ({Icon, title}) => {
  return (
    <div className='HeaderOption' >
    {Icon && <Icon className="headerOption__icon" />}
    <h3 className='headeOption__title' >{title}</h3>
     </div>
  )
}

export default HeaderOption