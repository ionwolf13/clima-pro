import React from 'react';

export const Card = ({nextDay}) => {

    return(
        <div className='card-comp' id='mini-card'>
            <h3 className='mini-card-detail'>{nextDay}</h3>
        </div>
    )
}