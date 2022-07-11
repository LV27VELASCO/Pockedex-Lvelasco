import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './elements/Home'
import ContainerCard from './elements/Pokedex/ContainerCard'
import Error404 from './elements/Pokedex/Error404'
import PockedexScreem from './elements/Pokedex/PockedexScreem'
import PockemonInfo from './elements/Pokedex/PockemonInfo'
import Protected from './elements/Pokedex/Protected'




function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<Home/>}/>
        <Route element={<Protected/>}>
        

        <Route path='/' element={<PockedexScreem/>}>
        <Route path='/*' element={<Error404/>}/>
          <Route path='pockedex' element={<ContainerCard/>}/>
          <Route path='pockedex/:id' element={<PockemonInfo/>}/>
        </Route>
        </Route> 
      </Routes>
    </div>
  )
}

export default App
