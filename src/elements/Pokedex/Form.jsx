import React from 'react'






const Form = ({ pockeSearch, setPockeSearch, pockeType, setFilterType, stateFilter, setCurrentPages }) => {

    const inputText = e => {
        setPockeSearch(e.target.value)
        setCurrentPages(1)
    }

    const onChangeSelect = e => {
        setFilterType(e.target.value)
        setCurrentPages(1)
        setPockeSearch("")
    }

    return (
        <div className='from-Select'>
            <form className='form-bienvenida'>
                <input className={pockeSearch ? 'input-true' : 'input-bienvenida'} type="text" placeholder='Search pokemon name'
                    onChange={inputText} value={pockeSearch} />
            </form>
            <select onChange={onChangeSelect} className={`select-son ${stateFilter ? 'active' : ''}`}>
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