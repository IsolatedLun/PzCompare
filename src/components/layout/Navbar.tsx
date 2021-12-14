import React from 'react';
import { toggleFilter, toggleShowAll } from '../../features/options/optionSlice.js';
import { useAppDispatch } from '../../hooks.js';
import { toggleEl } from '../../utils/funcs.js';

const Navbar = () => {
    const dispatch = useAppDispatch();

    const handleBtn = (e: React.ChangeEvent<HTMLButtonElement>) => {
        const action: string = e.target.value;
        
        if(action === 'show-all') {
            dispatch(toggleShowAll());
        }

        else if(action === 'filter') {
            dispatch(toggleFilter());
        }
    }

    return (
        <>
            <nav className="primary-nav">
                <div className="progress-bar" id='progress-bar'></div>
                <h1 className="nav-title">PzCompare</h1>
                
                <div className="nav-btns">
                    <button
                    className='fa btn cube nav-btn'
                    aria-label='Toggle Modal'
                    onClick={() => toggleEl('modal', 'active')}
                    >&#xf0b0;</button>

                    <button 
                    className='fa btn cube nav-btn'
                    aria-label='Toggle Side Navigation'
                    onClick={() => toggleEl('sidenav', 'active')}>&#xf013;</button>
                    
                </div>
            </nav>

            <div className="sidenav" id='sidenav'>
                <button 
                className='fa btn cube sidenav-close-btn'
                aria-label='Toggle Side Navigation'
                onClick={() => toggleEl('sidenav', 'active')}>&#xf00d;</button>

                <div className="options">

                    <div className="option flex-align-1">
                        <label className='opt-label'>Show all stats</label>
                        <div className="switch round">
                            <input type="checkbox"
                            aria-label='Show All Stats' 
                            onClick={(e: any) => handleBtn(e)} value='show-all' className='inpt-switch' />
                            
                            <div className="slider round"></div>
                        </div>
                    </div>

                    <div className="option flex-align-1">
                        <label className='opt-label'>Show filters</label>
                        <div className="switch round">
                            <input type="checkbox"
                            aria-label='Show Filters'  
                            onClick={(e: any) => handleBtn(e)} value='filter' className='inpt-switch' />
                            
                            <div className="slider round"></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
