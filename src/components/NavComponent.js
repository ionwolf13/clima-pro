import React from 'react';

export const NavComponent = ({currentLocation, setCurrentLocation}) => {

    const searchFunction = (e) => {
        console.log(e.target.value)
        setCurrentLocation({current: e.target.value})
    }

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return(
        <div className='nav-comp'>
            <div className='nav-sec'>
            <form className='search-bar'>
                <input  onChange={(e) => searchFunction(e)} id='search-text-area' type='textfield' placeholder='Search'/>
                <button id='search-submit-button' type='submit' value='submit'></button>
            </form>
            </div>
            
            <div className='nav-sec'>
                <h3> degreescity name, state</h3>
                <p>{date}, {time}</p>
            </div>
            <div className='nav-sec'>
                <p>picture</p>
                <p>degrees</p>
            </div>
            <div className='nav-sec'>
                <button>switch F* or C*</button>
            </div>           
        </div>
    )
}