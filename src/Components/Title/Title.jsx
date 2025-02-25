import React from 'react'
import './Title.css'

const Title = (probs) => {
    const { subTitle, title } = probs;

    return (
        <div className='title'>
            <p>{subTitle}</p>
            <h2>{title}</h2>

        </div>
    )
}

export default Title