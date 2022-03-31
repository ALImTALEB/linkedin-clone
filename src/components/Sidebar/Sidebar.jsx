import React from 'react'
import {Avatar} from '@material-ui/core'

import './styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar' >
    <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Ali Taleb</h2>
        <h4>ali@gmail.com</h4>
    </div>

    <div className="sidebar__stats">
        <div className="sidebar__stat">
             <p>Who viewed your profile</p>
             <p className="sidebar__statNumber">
                 100
             </p>
        </div>
        <div className="sidebar__stat">
        <p>Views of your post </p>
             <p className="sidebar__statNumber">
                 100
             </p>
        </div>
    </div>

    <div className="sidebar__bottom">
        <p>Recent</p>
    </div>
    </div>
  )
}

export default Sidebar