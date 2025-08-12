import React from 'react'
import Tour from './Tour'

const Tours = ({tours}) => {
    return (
    <section>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </section>
  );
}

export default Tours;