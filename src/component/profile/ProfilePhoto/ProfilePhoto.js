import React from 'react'
import './ProfilePhoto.css'
import tof from './tof.jpg'
const ProfilePhoto = () => {
    return (
     <div>
            <h1>
                WELCOME to my cV!
            </h1>
            <div className='container'>
            <img src={tof} alt='tof' className='photo'/ >
                    
            <div className="overlay">
                <div className="text">Hi! <br/> bonjour!  <br/>السلام عليكم</div>
            </div>
            </div>
            
    </div>
    )
}

export default ProfilePhoto
