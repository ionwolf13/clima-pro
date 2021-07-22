import React from 'react';
import { Card } from './Card.js';

export const CardComponent = ({currentLocation}) => {

    let days = currentLocation.daysOfTheWeek;
    let setDays = [];
    const getSetDays = () => {
        let m = 1;
        let extraDays = 0
        for(let i = 3; i < 8; i++){
            if(days[new Date().getDay() + m] === undefined){
                setDays.push(days[new Date().getDay() - days.indexOf(days[new Date().getDay()]) + extraDays ])
                extraDays++
            }
            else if(days[new Date().getDay() + m]){
                setDays.push(days[new Date().getDay() + m])
            }
            m++
        }
    }
    getSetDays();
    let counter = 1;
    return(
        <div className='card-comp' id='sub-card-comp'>
            <h3 id='sub-title'>Upcoming Forecast</h3>
            {setDays.map(day => 
                <div>
                    <Card nextDay={day} currentLocation={currentLocation} counter={counter++}/>
                </div>
            )}
        </div>
    )
}