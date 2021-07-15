import React from 'react';
import { Card } from './Card.js';

export const CardComponent = ({currentLocation}) => {

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let setDays = [];
    const getSetDays = () => {
        let m = 1;
        for(let i = 3; i < 8; i++){
            if(days[new Date().getDay() + m]){
                setDays.push(days[new Date().getDay() + m])
            }
            else{
                m = 1
                setDays.push(days[new Date().getDay() - days.indexOf(days[new Date().getDay()])])
            }
            m++
        }
    }
    getSetDays();
    
    return(
        <div className='card-comp' id='sub-card-comp'>
            <h3 id='sub-title'>Upcoming Forecast</h3>
            {setDays.map(day => <Card nextDay={day} currentLocation={currentLocation}/>)}
        </div>
    )
}