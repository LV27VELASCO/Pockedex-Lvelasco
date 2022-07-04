import axios from 'axios'
import { useEffect, useState } from 'react'



const useApiPockemon = () => {
    const [apiPockemons, setApiPockemons] = useState()
    const [pockeType, setPockeType] = useState()
    const [filterType, setFilterType] = useState('All pokemons')
    const [stateFilter, setStateFilter] = useState(false)

    useEffect(() => {
        if (filterType === "All pokemons") {
            const urlApiPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"
            axios.get(urlApiPokemon)
                .then(res => setApiPockemons(res.data.results))
                .catch(err => console.log(err))
                .finally(res => setStateFilter(false))
        } else {
            const UrlTypeFilter = `https://pokeapi.co/api/v2/type/${filterType}/`
            axios.get(UrlTypeFilter)
                .then(res => {
                    const Array = res.data.pokemon.map(e => e.pokemon)
                    console.log(Array)
                    setApiPockemons(Array)
                })
                .catch(err => console.log(err))
                .finally(res => setStateFilter(true))
        }
    }, [filterType])

    useEffect(() => {
        const urlType = `https://pokeapi.co/api/v2/type/`
        axios.get(urlType)
            .then(res => setPockeType(res.data.results))
            .catch(err => console.log(err))
    }, [])


   

    return { apiPockemons, pockeType, setFilterType,stateFilter}

}

export default useApiPockemon