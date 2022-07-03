import React, { useEffect, useState } from 'react'
import useApiPockemon from '../../Hooks/useApiPokemon'
import PockeCard from './PockeCard'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'
import Form from './Form'

const ContainerCard = () => {

  const nameUser = useSelector(state => state.nameUser)
  const { apiPockemons } = useApiPockemon()

  //Logica Input 
  const [pockeSearch, setPockeSearch] = useState()
  const [filterPockemon, setFilterPockemon] = useState()


  useEffect(() => {
    if (pockeSearch) {
      setFilterPockemon(apiPockemons.filter(e => e.name.includes(pockeSearch.toLowerCase())))
    }
  }, [pockeSearch])





  //Logica Paginacion
  const [currentpages, setCurrentPages] = useState(1)

  let arrayCard = []
  let cardPerPage = 10

  if (apiPockemons?.length < cardPerPage) {
    arrayCard = [...apiPockemons]
  } else {
    const lastCard = cardPerPage * currentpages
    arrayCard = apiPockemons?.slice(lastCard - cardPerPage, lastCard)
  }


  let arrayPages = []
  let quantityPages = Math.ceil(apiPockemons?.length / cardPerPage)//cantidad maxima de paginas
  let pagePerBlock = 5
  let currentBlock = Math.ceil(currentpages / pagePerBlock)

  //Analiza si estamos en el ultimo bloque (true) or (false)
  if (currentBlock * pagePerBlock >= quantityPages) {
    for (let i = currentBlock * pagePerBlock - pagePerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
  } else {
    for (let i = currentBlock * pagePerBlock - pagePerBlock + 1; i <= currentBlock * pagePerBlock; i++) {
      arrayPages.push(i)
    }
  }

  const proveedores = [
    { label: 'don', value: 'yo' }
  ]

  return (
    <>
      <div className='container-bienvenida'>
        <div className='coach'>
          <h2><span>Welcome</span> {nameUser ? nameUser : 'coach'}, let's prepare you for battle!!</h2>
        </div>
        <div className='container-select'>
          <Form setPockeSearch={setPockeSearch}
            pockeSearch={pockeSearch} />
        </div>
        <Pagination
          arrayPages={arrayPages}
          currentpages={currentpages}
          setCurrentPages={setCurrentPages}
          quantityPages={quantityPages}
          pockeSearch={pockeSearch} />

      </div>
      <section className='container-cards'>

        {
          pockeSearch
            ?
            filterPockemon?.map(pokemons => (<PockeCard key={pokemons.url} pokemons={pokemons} />))
            :
            arrayCard?.map(pokemons => (<PockeCard key={pokemons.url} pokemons={pokemons} />))

        }
      </section>
    </>
  )
}

export default ContainerCard