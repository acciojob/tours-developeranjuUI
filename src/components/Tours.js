import React from 'react'
import Tour from './Tour'

const Tours = ({tours}) => {
    return (
        <section style={listStyle}>
        {tours.map((tour)=>(
            <Tour key={id} {...tour} removeTour={removeTour} />
        ))}
        </section>
    )
}

const listStyle = {
    display: 'grid',
    gap: '1.25rem',
    maxWidth: '900px',
    margin: '1.5rem auto'
}

export default Tours;