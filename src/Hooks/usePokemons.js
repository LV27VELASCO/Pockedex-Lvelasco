import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useApiPockemon from './useApiPokemon'

const usePokemons = ({ pokemons }) => {


    const [pockemon, setPockemon] = useState()
    const [loading, setloading] = useState(true)
    

    useEffect(() => {
        const urlPokemons = pokemons.url
        axios.get(urlPokemons)
            .then(res => setPockemon(res.data))
            .catch(err => console.log(err))
            .finally(()=>setloading(!loading))}
, [])



    return { pockemon,loading}

}

export default usePokemons