import React, { useEffect, useState } from 'react'
import useCardBackground from '../../Hooks/useCardBackground'
import usePokemons from '../../Hooks/usePokemons'

const PockeCard = ({ pokemons }) => {

    const { pockemon, loading } = usePokemons({ pokemons })
    const { backgroundColor } = useCardBackground({ pockemon })



    return (
        <>
            <article className='Card' style={backgroundColor}>
                <div className='container-img'>
                    <img src={pockemon?.sprites.other['official-artwork'].front_default} />
                </div>
                <section className='container-datos'>
                    <header className='name-type'>
                        <div className='pocke-name'>
                            <h2>{pockemon?.name}</h2>
                        </div>

                        <span>{pockemon?.types[0].type.name}</span><span>{pockemon?.types[1] ? ` / ${pockemon?.types[1].type.name}` : ''}</span>
                        <p>Type</p>
                    </header>
                    <div className='caracteristicas'>
                        <div className='poder'>
                            <h4>HP</h4>
                            <span>{pockemon?.stats[0].base_stat}</span>
                        </div>
                        <div className='poder'>
                            <h4>ATQ</h4>
                            <span>{pockemon?.stats[1].base_stat}</span>
                        </div>
                        <div className='poder'>
                            <h4>DEF</h4>
                            <span>{pockemon?.stats[2].base_stat}</span>
                        </div>
                        <div className='poder'>
                            <h4>SPD</h4>
                            <span>{pockemon?.stats[5].base_stat}</span>
                        </div>
                        <div className='poder'>
                            <h4>STK</h4>
                            <span>{pockemon?.stats[4].base_stat}</span>
                        </div>
                        <div className='poder'>
                            <h4>SDF</h4>
                            <span>{pockemon?.stats[4].base_stat}</span>
                        </div>
                    </div>
                </section>

                <div className='loader'>
                    <div className={`loaderLeft ${loading ? "" : "animate"}`}>
                        <div className="loaderBlock-Red"></div>
                        <div className="loaderBlock-Black">
                            <div className="linea1"></div>
                            <div className="circle-Left">
                                <div className="circle-White">
                                    <div className="circle-Black">
                                        <div className="circle-Gray"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`loaderRight ${loading ? '' : "animate"}`}>
                        <div className="loaderBlock-Black">
                            <div className="circle-Rigth">
                                <div className="circle-White">
                                    <div className="circle-Black">
                                        <div className="circle-Gray"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="linea2"></div>
                        </div>
                        <div className="loaderBlock-Red"></div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default PockeCard