import React, {useState} from 'react'
import './styles/Feed.css'

import  CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'


import InputOption from './InputOption'
import Post from './Post'

const Feed = () => {
    const [posts, setPosts] = useState([])

const sendPost = (e) => {
    e.preventDefault()
}

  return (
    <div className='feed' >
        <div className="feed__inputContainer">
            <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" />
                <button onClick={sendPost} type="submit" >Send</button>
            </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo'
                 color="#70B5F9" />

<InputOption Icon={SubscriptionsIcon} title='Video'
                 color="#70B5F9" />

<InputOption Icon={EventNoteIcon} title='Event'
                 color="#70B5F9" />

<InputOption Icon={CalendarViewDayIcon} title='Write article'
                 color="#70B5F9" />
            </div>
        </div>
      
      {/* Post  */}
      {posts.map((post) => ( 
          <Post />
      ))}
      <Post name="Ali Taleb"
         description="This is a test"
         message="woow"
       />
    </div>
  )
}

export default Feed