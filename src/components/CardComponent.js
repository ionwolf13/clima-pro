import React from 'react';
import { Card } from './Card.js';

export const CardComponent = () => {

    return(
        <div className='card-comp' id='sub-card-comp'>
            <h3 id='sub-title'>Upcoming Forecast</h3>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}