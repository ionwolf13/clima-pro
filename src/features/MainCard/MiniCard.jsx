import React from 'react';
import { cel2Far } from '../../utils/utils';

export const MiniCard = ({weather, data, currentDegree}) => {


    return(
            <div className="labels-data-sec">
                <img className="labels-data-img" src={weather[1]} alt='Celcius' height='25'/>
                <h5 className="labels-data-label"> <strong>{weather[0]}:</strong> </h5>
                <p className='labels-data-value'> {(weather[3].includes('temp'))? 
                                                        (currentDegree.degree === 'Celsius')? 
                                                            data[`${weather[3]}`] : cel2Far(data[`${weather[3]}`])
                                                    :
                                                    data[`${weather[3]}`] 
                                                        }
                </p>
                <p><strong> {weather[2]} </strong></p>
            </div>
    )
}