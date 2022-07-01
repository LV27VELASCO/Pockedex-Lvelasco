import React from 'react'

const Pagination = ({ arrayPages, currentpages, setCurrentPages, quantityPages }) => {

    const prevPag = () => {
        if (currentpages - 1 === 0) {
            setCurrentPages(quantityPages)
        } else { setCurrentPages(currentpages - 1) }
    }

    const nextPag = () => {
        if (currentpages + 1 > quantityPages) {
            setCurrentPages(1)
        }
        else {
            setCurrentPages(currentpages + 1)
        }
    }


    return (
        <div className='container-pagination'>
            <div className='flechas' onClick={prevPag}>&#60;</div>
            <ul className='container-numbers'>{arrayPages?.map(num => (
                <li key={num} className='numbers-pag'>{num}</li>
            ))
            }</ul>
            <div className='flechas' onClick={nextPag}>&#62;</div>
        </div>
    )
}

export default Pagination