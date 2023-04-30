import React, { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTours }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className='single-tour'>
            <img src={image} alt={name} className='img' />
            <span className="tour-price">{price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {readMore ? info : `${info.slice(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)} className='info-btn'>{readMore ? "read less" : "read more"}</button>
                </p>
                <button onClick={() => { removeTours(id) }} className="delete-btn btn-block btn">not interested</button>
            </div>
        </article>
    )
}

export default Tour
