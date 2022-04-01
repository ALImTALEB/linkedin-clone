import React from 'react'
import './App.css'


import Feed from './components/Feed/Feed'
import Header from './components/header/Header'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='app' >
    <Header />

    {/* body  */}
    <div className="app__body">
      <Sidebar />
      <Feed />
    </div>
    </div>
  )
}

export default App