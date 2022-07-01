import React, { useEffect, useState } from 'react'

const useCardBackground = ({pockemon}) => {
    const [fondo, setfondo] = useState()

    const type = pockemon?.types[0].type.name

    const gradients = [
        { tipo: 'grass', gradiente: 'linear-gradient(180deg, rgb(27, 208, 235) -40%, rgba(253,187,45,1) 100%)', border: '8px solid rgba(81,196,139,1)' },
        { tipo: 'fire', gradiente: 'linear-gradient(180deg, rgba(255,3,3,1) -50%, rgba(200,180,75,1) 100%)', border: '8px solid rgba(255,3,3,1)'},
        { tipo: 'water', gradiente: 'linear-gradient(180deg, rgba(2,11,251,0.9640231092436975) -35%, rgba(9,168,250,1) 62%)', border: '8px solid  rgba(2,11,251,0.9640231092436975)' },
        { tipo: 'bug', gradiente: 'linear-gradient(180deg, rgba(1,82,6,1) -35%, rgba(0,255,85,1) 62%)', border: '8px solid rgba(1,82,6,1)' },
        { tipo: 'normal', gradiente: 'linear-gradient(180deg, rgba(18,4,60,1) -30%, rgba(200,123,75,1) 100%)', border: '8px solid rgba(50,51,129,1)' },
        { tipo: 'poison', gradiente: 'linear-gradient(180deg, rgba(5,0,42,1) -35%, rgba(111,34,134,1) 62%)' ,border: '8px solid rgba(76,5,117,1)'},
        { tipo: 'electric', gradiente: 'linear-gradient(180deg, rgba(180,175,4,1) -30%, rgba(246,249,132,1)1 00%)', border: '8px solid rgba(180,1 75,4,1)' },
        { tipo: 'ground', gradiente: 'linear-gradient(180deg, rgba(74,51,0,1) -25%, rgba(176,148,77,1) 100%)', border: '8px solid rgba(74,51,0,1)' },
        { tipo: 'fairy', gradiente: 'linear-gradient(180deg, rgba(4,60,54,1) -25%, rgba(77,176,130,1) 100%)', border: '8px solid rgba(4,60,54,1)' },
        { tipo: 'fighting', gradiente: 'linear-gradient(180deg, rgba(219,70,73,1) -25%, rgba(71,255,241,1) 100%)', border: '8px solid rgba(219,70,73,1)' },
        { tipo: 'psychic', gradiente: 'linear-gradient(180deg, rgba(106,0,32,1) -25%, rgba(214,26,227,1) 100%)', border: '8px solid rgba(106,0,32,1)' },
        { tipo: 'rock', gradiente: 'linear-gradient(180deg, rgba(47,29,2,1) -25%, rgba(176,82,0,1) 100%)', border: '8px solid rgba(47,29,2,1)' },
        { tipo: 'ghost', gradiente: 'linear-gradient(180deg, rgba(19,3,70,1) -25%, rgba(50,66,233,1) 100%)', border: '8px solid rgba(19,3,70,1)' },
        { tipo: 'ice', gradiente: 'linear-gradient(180deg, rgba(0,149,252,1) -25%, rgba(137,147,255,1) 100%)', border: '8px solid  rgba(0,149,252,1)' },
        { tipo: 'dragon', gradiente: 'linear-gradient(180deg, rgba(252,0,0,1) -20%, rgba(255,224,137,1) 100%)', border: '8px solid  rgba(252,0,0,1)' },
        { tipo: 'dark', gradiente: 'linear-gradient(180deg, rgba(0,0,0,1) -20%, rgba(50,50,47,0.9724264705882353) 99%)', border: '8px solid rgba(0,0,0,1)' },
        { tipo: 'steel', gradiente: 'linear-gradient(180deg, rgba(48,48,48,1) -20%, rgba(107,107,106,0.9724264705882353) 99%)', border: '8px solid rgba(48,48,48,1)' },
        { tipo: 'default', gradiente: 'linear-gradient(180deg, rgba(18,4,60,1) -20%, rgba(153,200,75,1) 100%)', border: '8px solid rgba(18,4,60,1)' }
    ]

    const colors = array => {
        for (let i = 0; i < array.length; i++) {
            if (type == array[i].tipo) {
                setfondo(
                    {
                    rgb:array[i].gradiente,
                    border:array[i].border})}}}

    useEffect(() => {
        colors(gradients)
    }, [pockemon])

    const backgroundColor = {
        background: fondo?.rgb,
        border:fondo?.border
    } 

    return{backgroundColor}

}

export default useCardBackground