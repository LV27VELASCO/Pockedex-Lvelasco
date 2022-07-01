import React from 'react'
import InputHome from './InputHome'
import Pokedex from '../assets/img/Pokedex.png'

const Home = () => {
  return (
    <>
      <div className='Home'>
        <div className='home-img'>
          <img src={Pokedex} />
        </div>
        <h2>¡Hello coach!</h2>
        <h4>To start, give me your name</h4>
        <InputHome />
      </div>
      <div className='container-footer'>
        <div className="container-bola">
          <div className="circulo-blanco">
          <div className="circulo-negro">
          <div className="circulo-gris"></div>
          </div>
          </div>
    
        </div>
        <div className="color-red"></div>
        <div className="color-black"></div>
      </div>
    </>
  )
}

export default Home