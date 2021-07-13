import React from 'react';

export const MainCardComponent = ({currentLocation}) => {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = days[new Date().getDay()];
    return(
        <div className='card-comp' id='main-card-comp'>
            <h1 className='main-card-detail'>{dayName}</h1>   
            <h2></h2>     
            </div>
    )
}