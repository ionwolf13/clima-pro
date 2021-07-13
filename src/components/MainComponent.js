import React from 'react';
import { MainCardComponent } from './MainCardComponent.js'; 
import { CardComponent } from './CardComponent.js';
import { ExtraCardComponent } from './ExtraCardComponent.js';

export const MainComponent = () => {

    
    return(
        <div className='main-comp'>
            <MainCardComponent />
            <ExtraCardComponent />
            <CardComponent />
        </div>
    )
}