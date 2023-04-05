import { useState } from 'react'
import './App.css'
import CakeView from './features/cake/CakeView'
import IcecreamView from './features/iceCream/IcecreramView'
import UserView from './features/users/UserView'

function App() {

  return (
    <div className="App">
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  )
}

export default App