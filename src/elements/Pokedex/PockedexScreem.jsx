
import pokedex from '../../assets/img/Pokedex.png'
import ContainerCard from './ContainerCard'

const PockedexScreem = () => {

  return (
    <div className='Bienvenido'>
      <div className='container-header'>
        <img src={pokedex} className='img-header'/>
        <div className="container-bola-h">
          <div className="circulo-blanco-h">
          <div className="circulo-negro-h">
          <div className="circulo-gris-h"></div>
          </div>
          </div>
    
        </div>
        <div className="color-red-h"></div>
        <div className="color-black-h"></div>
      </div>

        
        <ContainerCard/>
    </div>
  )
}

export default PockedexScreem