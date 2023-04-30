import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTours }) => {
    return (
        <section>
            <div className="title">
                <h2>our title</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {
                    tours.map(tour => <Tour removeTours={removeTours} key={tour.id} {...tour} />)
                }
            </div>
        </section>
    )
}

export default Tours
