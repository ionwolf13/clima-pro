import React from 'react';

export const NavComponent = () => {

    return(
        <div className='nav-comp'>
            <div className='nav-sec'>
            <form className='search-bar'>
                <input id='search-text-area' type='textfield' placeholder='Search'/>
                <button id='search-submit-button' type='submit' value='submit'></button>
            </form>
            </div>
            <div className='nav-sec'>
            <p>picture</p>
            </div>
            <div className='nav-sec'>
            <h3> degreescity name, state</h3>
            </div>
            <div className='nav-sec'>
            <p>degrees</p>
            </div>
            <div className='nav-sec'>
            <button>switch F* or C*</button>
            </div>           
        </div>
    )
}