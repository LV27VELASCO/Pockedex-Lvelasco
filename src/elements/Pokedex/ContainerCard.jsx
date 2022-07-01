import React, { useState } from 'react'
import useApiPockemon from '../../Hooks/useApiPokemon'
import PockeCard from './PockeCard'
import {useSelector} from 'react-redux'
import Select from 'react-select'
import Pagination from './Pagination'

const ContainerCard = () => {

    const nameUser=useSelector(state => state.nameUser)
    const {apiPockemons}=useApiPockemon()
    const [currentpages, setCurrentPages] = useState(1)

    let arrayCard=[]
    let cardPerPage=10

    if(apiPockemons?.length<cardPerPage){
      arrayCard=[...apiPockemons]
    }else{
      const lastCard= cardPerPage * currentpages
      arrayCard=apiPockemons?.slice(lastCard - cardPerPage, lastCard)
    }


    let arrayPages=[]
    let quantityPages= Math.ceil(apiPockemons?.length / cardPerPage)//cantidad maxima de paginas
    let pagePerBlock = 5
    let currentBlock = Math.ceil(currentpages / pagePerBlock)

    //Analiza si estamos en el ultimo bloque (true) or (false)
    if(currentBlock * pagePerBlock >= quantityPages){
      for(let i = currentBlock * pagePerBlock - pagePerBlock +1; i <= quantityPages; i++){
        arrayPages.push(i)
      }
    }else{
      for(let i = currentBlock * pagePerBlock - pagePerBlock +1; i <= currentBlock * pagePerBlock; i++){
        arrayPages.push(i)
      }
    }

    const proveedores=[
        {label:'don', value:'yo'}
      ]

  return (
    <>
    <div className='container-bienvenida'>
        <div className='coach'>
        <h2><span>Welcome</span> {nameUser?nameUser:'coach'}, let's prepare you for battle!!</h2>
        </div>
        <div className='container-select'>
        <form className='form-bienvenida'>
          <input type="text"  className='input-bienvenida' placeholder='Buscar por nombre'/>
          <button className='button-bienvenida' >Buscar</button>
        </form>
        <Select className='select-son' options={proveedores}
        placeholder='Todos los pokemones'/>
        </div>
        <Pagination 
        arrayPages={arrayPages}
        currentpages={currentpages}
        setCurrentPages={setCurrentPages}
        quantityPages={quantityPages}/>
        </div>
    <section className='container-cards'>
        
        {
          
        arrayCard?.map(pokemons => (<PockeCard key={pokemons.url} pokemons={pokemons}/>))

        }
    </section>
    </>
  )
}

export default ContainerCard