import React from 'react'
import useApiPockemon from '../../Hooks/useApiPokemon'





const Form = ({ pockeSearch, setPockeSearch}) => {

    const {pockeType,setFilterType,stateFilter}=useApiPockemon()

    const inputText = e => {
        setPockeSearch(e.target.value)
    }

    const onChangeSelect= e=>{
        setFilterType(e.target.value)
    }

    return (
        <div className='from-Select'>
            <form className='form-bienvenida'>
                <input className={pockeSearch ? 'input-true' : 'input-bienvenida'} type="text" placeholder='Search pokemon name'
                    onChange={inputText} />
            </form>
            <select onChange={onChangeSelect} className={`select-son ${stateFilter?'active':''}`}>
                <option className='options' value="All pokemons">All pokemons</option>
                {
                    pockeType?.map(type => (
                        <option className='options' key={type.name} value={type.name}>{type.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Form