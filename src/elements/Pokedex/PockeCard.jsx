import React, { useEffect, useState} from 'react'
import useCardBackground from '../../Hooks/useCardBackground'
import usePokemons from '../../Hooks/usePokemons'
import LoaderCard from './LoadingCard/LoaderCard'

const PockeCard = ({pokemons}) => {

    const {pockemon,load}= usePokemons({pokemons})
    const {backgroundColor} = useCardBackground({pockemon})

    



    return (
        <>
        {
            load
            ?
            <LoaderCard/>
            :
        <article className='Card' style={backgroundColor}>
            <div className='container-img'>
                <img src={pockemon?.sprites.other['official-artwork'].front_default} />
            </div>
            <section className='container-datos'>
                <header className='name-type'>
                    <h2>{pockemon?.name}</h2>
                    <span>{pockemon?.types[0].type.name}</span><span>{pockemon?.types[1] ? ` / ${pockemon?.types[1].type.name}` : ''}</span>
                    <p>Type</p>
                </header>
                <div className='caracteristicas'>
                    <div className='poder'>
                        <h4>{pockemon?.stats[0].stat.name}</h4>
                        <span>{pockemon?.stats[0].base_stat}</span>
                    </div>
                    <div className='poder'>
                        <h4>{pockemon?.stats[5].stat.name}</h4>
                        <span>{pockemon?.stats[5].base_stat}</span>
                    </div>
                    <div className='poder'>
                        <h4>{pockemon?.stats[2].stat.name}</h4>
                        <span>{pockemon?.stats[2].base_stat}</span>
                    </div>
                    <div className='poder'>
                        <h4>{pockemon?.stats[1].stat.name}</h4>
                        <span>{pockemon?.stats[1].base_stat}</span>
                    </div>
                    <div className='poder'>
                        <h4>{pockemon?.stats[4].stat.name}</h4>
                        <span>{pockemon?.stats[4].base_stat}</span>
                    </div>
                    <div className='poder'>
                        <h4>{pockemon?.stats[3].stat.name}</h4>
                        <span>{pockemon?.stats[4].base_stat}</span>
                    </div>
                </div>
            </section>
        </article>
}
        </>
    )
}

export default PockeCard