import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Home from './elements/Home'
import ContainerCard from './elements/Pokedex/ContainerCard'
import PockedexScreem from './elements/Pokedex/PockedexScreem'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/Pockedex' element={<PockedexScreem/>} >
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
