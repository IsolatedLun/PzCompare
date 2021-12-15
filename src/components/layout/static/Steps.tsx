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
                    <img src={'/static/tut1.d5f8b669.png'} />
                </div>
            </div>

            <div className="step">
                <p className="step-title">
                2) If any errors popup be sure to refer to <Link to={'/faqs'} className='upper link'>Faq</Link> section.
                </p>
            </div>

        </div>
    )
}

export default Steps
