import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './elements/Home'
import ContainerCard from './elements/Pokedex/ContainerCard'
import PockedexScreem from './elements/Pokedex/PockedexScreem'
import PockemonInfo from './elements/Pokedex/PockemonInfo'



function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<PockedexScreem/>}>
          <Route path='pockedex' element={<ContainerCard/>}/>
          <Route path='pockedex/:id' element={<PockemonInfo/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
