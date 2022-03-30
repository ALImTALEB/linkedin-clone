import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
  return (
    <div className='header' >
    

  <div className="header__left">
  <img src="https://cdn-icons.flaticon.com/png/512/3488/premium/3488338.png?token=exp=1648677821~hmac=7d402e8ad20baa187757d647855795de" 
  alt="" />
  <div className="header__search">
  <SearchIcon />
    <input type="text" />
  </div>
  </div>

  <div className="header__right">

  </div>
    </div>
  )
}

export default Header