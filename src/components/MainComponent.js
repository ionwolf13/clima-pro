import React from 'react';
import { MainCardComponent } from './MainCardComponent.js'; 
import { CardComponent } from './CardComponent.js';
import { ExtraCardComponent } from './ExtraCardComponent.js';

export const MainComponent = ({currentLocation}) => {

    return(
        <div className='main-comp'>
            <MainCardComponent currentLocation={currentLocation} />
            {/* <ExtraCardComponent currentLocation={currentLocation} /> */}
            <CardComponent currentLocation={currentLocation} />
        </div>
    )
}