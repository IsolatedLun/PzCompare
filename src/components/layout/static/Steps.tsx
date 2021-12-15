import React from 'react'
import { Link } from 'react-router-dom'

const Steps = () => {
    return (
        <div className='steps'> 
                
            <div className="step">
                <p className="step-title">
                    1) Fill in the 2 fields and press the 
                    <button className='fa btn round mi-02'>&#xf067;</button>button.</p>
                <div className="step-img">
                    <img src={"https://pz-compare.herokuapp.com/static/tut1.png"} />
                </div>
            </div>

            <div className="step">
                <p className="step-title">
                2) If any errors popup be sure to refer to <Link to={'/faqs'} className='upper link'>Faq</Link> section.
                </p>
            </div>

            <div className="step">
                <p className="step-title">
                3) The item names are SPACE SENSITIVE so 'Handaxe' should be 'Hand axe'.
                </p>
            </div>

        </div>
    )
}

export default Steps
