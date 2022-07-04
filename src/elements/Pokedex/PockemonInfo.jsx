import React from 'react'
import { useParams } from 'react-router-dom'

import usePokemonInfo from '../../Hooks/usePokemonInfo'

const PockemonInfo = () => {

    const { id } = useParams()
    const { pokemonInfo, backgroundColor,letterColor } = usePokemonInfo({ id })
    console.log(pokemonInfo)



    return (
        <article className='Tarjet'>
            <section className='section1'>
                <div className='container-background' style={backgroundColor}>
                    <div className='container-img-pokemon'>
                        <img src={pokemonInfo?.sprites.other['official-artwork'].front_default} alt="pokemon" className='img-pokemon' />
                    </div>
                </div>
                <div className='contain-Info'>
                    <div className='contain-id'>
                        <h2>#{pokemonInfo?.id}</h2>
                    </div>
                    <div className='contain-name'>
                        <h2 className='poke-name' style={letterColor}>{pokemonInfo?.name}</h2>
                    </div>
                    <div className='compostura'>
                        <div className='poder'>
                            <h4 className='nombre'>Peso</h4>
                            <span>{pokemonInfo?.weight}</span>
                        </div>
                        <div className='poder'>
                            <h4 className='nombre'>Altura</h4>
                            <span>{pokemonInfo?.height}</span>
                        </div>
                    </div>
                    <div className='type-hability'>
                        <div className='contain-type'>
                            <h3>Type</h3>
                            <div className='type'>
                                {
                                    pokemonInfo?.types.map((types, index) => (
                                        <div className={types.type.name} key={index}>
                                            <span >{types.type.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='contain-hability'>
                            <h3>Hability</h3>
                            <div className='hability'>
                                {
                                    pokemonInfo?.abilities.map((hability, index) => (
                                        <div className='habilitys' key={index}>
                                            <span >{hability.ability.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stats'>
                    <h2 className='stats-name' style={letterColor}>Stats</h2>
                    <div className='contain-medidor'>
                        <div className='caracter'>
                            <div className='porcentaje'>
                                <h3>Health</h3> <span>{pokemonInfo?.stats[0].base_stat}/150</span>
                            </div>
                            <div className='medidor'>
                            <div className='barra' style={{width:`${pokemonInfo?.stats[0].base_stat}%`}}></div>
                            </div>
                        </div>
                        <div className='caracter'>
                            <div className='porcentaje'>
                                <h3>Attack</h3><span>{pokemonInfo?.stats[1].base_stat}/150</span>
                            </div>
                            <div className='medidor'>
                            <div className='barra' style={{width:`${pokemonInfo?.stats[1].base_stat}%`}}></div>
                            </div>
                        </div>
                        <div className='caracter'>
                            <div className='porcentaje'>
                                <h3>Defense</h3><span>{pokemonInfo?.stats[2].base_stat}/150</span>
                            </div>
                            <div className='medidor'>
                            <div className='barra' style={{width:`${pokemonInfo?.stats[2].base_stat}%`}}></div>
                            </div>
                        </div>
                        <div className='caracter'>
                            <div className='porcentaje'>
                                <h3>Speed</h3><span>{pokemonInfo?.stats[5].base_stat}/150</span>
                            </div>
                            <div className='medidor'>
                                <div className='barra' style={{width:`${pokemonInfo?.stats[5].base_stat}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className='movements'>
                    <h2 style={letterColor}>Movements</h2>
                </div>
                <div className='list-movements'>
                    {
                        pokemonInfo?.moves.map((movement,index)=>(
                            <div key={index} className='movement-name'>
                                <h4>{movement.move.name}</h4>
                            </div>
                        ))
                    }
                </div>
            </section>
        </article>
    )
}

export default PockemonInfo