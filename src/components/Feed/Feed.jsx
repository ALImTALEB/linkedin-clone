import React, {useState, useEffect} from 'react'
import './styles/Feed.css'

import  CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'


import InputOption from './InputOption'
import Post from './Post'
import { db, auth } from '../Firebase/Firebase'
import firebase from 'firebase/compat/app';

const Feed = () => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect( () => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
        )
        );
    }, [])

const sendPost = (e) => {
    e.preventDefault()

    db.collection('posts').add({
        name: 'Ali Taleb',
        description: 'test firebase',
        message:  input,
        photoUrl: '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp() ,
    })

    setInput('')
}

  return (
    <div className='feed' >
        <div className="feed__inputContainer">
            <div className="feed__input">
            <CreateIcon />
            <form>
                <input value={input} onChange={e=> setInput(e.target.value)} type="text" />
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
      {posts.map(({id, data: {name ,description, message, photoUrl} }) => ( 
          <Post 
             key={id}
             name={name}
             description={description}
             message={message}
             photoUrl={photoUrl}
           />
      ))}

    </div>
  )
}

export default Feed