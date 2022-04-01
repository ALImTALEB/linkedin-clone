import React from 'react'
import {Avatar} from '@material-ui/core'

import './styles/Sidebar.css'

const Sidebar = () => {

    const recentItem = (topic) => 
         ( 
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p> {topic} </p>
        </div>
        )
    



  return (
    <div className='sidebar' >
    <div className="sidebar__top">
        <img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t31.18172-8/13503118_563110030528758_5751704816779063246_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=5ELKxCQREagAX-XZJE4&_nc_ht=scontent.ftun16-1.fna&oh=00_AT8al6XNNyju8-rD7RQqm7EgRDzONk_5q8-ByPCprGwVmQ&oe=626D04AF" alt="" />
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
        {recentItem('reactJS')}
        {recentItem('programming')}
        {recentItem('design')}
        {recentItem('developer')}

        
    </div>
    </div>
  )
}

export default Sidebar