import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
    return (
    <section style={{ display: 'flex',flexWrap: 'wrap', width: '100%', justifyContent: 'start',}}>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </section>
  );
}

export default Tours;