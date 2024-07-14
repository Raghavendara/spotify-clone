import React from 'react'
import Sidebar from './components/Sidebar/sidebar'
import Player from './components/Player/player';
import Display from './components/Display/display';

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
    </div>
  )
}

export default App