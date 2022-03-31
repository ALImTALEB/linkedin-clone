import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='app' >
    <Header />

    {/* body  */}
    <div className="app__body">
      <Sidebar />
    </div>
    </div>
  )
}

export default App