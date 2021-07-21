import React from 'react';
import { MainCardComponent } from './MainCardComponent.js'; 
import { CardComponent } from './CardComponent.js';

export const MainComponent = ({currentLocation}) => {

    return(
        <div className='main-comp'>
            <MainCardComponent currentLocation={currentLocation} />
            <CardComponent currentLocation={currentLocation} />
        </div>
    )
}