import axios from 'axios'
import { useEffect, useState } from 'react'



const useApiPockemon = () => {
    const [apiPockemons, setApiPockemons] = useState()

    useEffect(() => {
     
        const urlApi="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=112"

        axios.get(urlApi)
        .then(res => setApiPockemons(res.data.results))
        .catch(err => console.log(err))
    }, [])


    

    return {apiPockemons}
    
}

export default useApiPockemon