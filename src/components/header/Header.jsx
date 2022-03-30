import React from 'react'
import "./styles/Header.css"
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import { Notifications, SupervisorAccount, Chat,Work } from '@material-ui/icons'

import HeaderOption from './HeaderOption'

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
  <HeaderOption Icon={HomeIcon} title='Home' />
  <HeaderOption Icon={SupervisorAccount} title='My Network' />
  <HeaderOption Icon={Work} title='Jobs' />
  <HeaderOption Icon={Chat} title='Messaging' />
  <HeaderOption Icon={Notifications} title='Notifications' />

  <HeaderOption avatar="https://lh3.googleusercontent.com/ogw/ADea4I6EfoUe-I0Sh5sNZcAv5WFWGkiSM3C96Ic57ePQ=s32-c-mo" title="me" />

  </div>
    </div>
  )
}

export default Header