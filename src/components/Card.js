import React from 'react';

export const Card = ({nextDay,currentLocation}) => {

    return(
        <div className='card-comp' id='mini-card'>
            <div className='mini-card-detail'>
                <h3 className='mini-card-detail'>{nextDay}</h3>
            </div>
            <div className='mini-card-detail'>  
                <p className='mini-card-detail' >iamge</p>
            </div>
            <div className='mini-card-detail'>
                <p className='mini-card-detail' >precip</p>
            </div>
            <div className='mini-card-detail'> 
                <p className='mini-card-detail' >hig temp</p>
            </div>
            <div className='mini-card-detail'>
                <p className='mini-card-detail' >low temp</p>
            </div>
            

        </div>
    )
}