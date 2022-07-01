import axios from 'axios'
import React, { useEffect, useState } from 'react'

const usePokemons = ({pokemons}) => {

    const [pockemon, setPockemon] = useState()
    const [load, setLoad] = useState(true)
  
    useEffect(() => {
        const urlPokemons= pokemons.url
        axios.get(urlPokemons)
        .then(res => {
            setPockemon(res.data)
            setTimeout(()=>{
                setLoad(false)
             },800)
            })
        .catch(err => console.log(err))
    }, [])
    
    return {pockemon,load,setLoad}

}

export default usePokemons