import React from 'react'
import './HoverAnimation.css'
const HoverAnimation = () => {
    return (
        <>
            <div className='container'>
                <div className='box box1'>
                    Rotate 360
                </div>
                <div className='box box2'>
                    Line L.R
                </div>
                <div className='box box3'>
                    Shake L&R
                </div>
                <div className='box box4'>
                    Line U.R&D.L
                </div>
                <div className='box box5'>
                    Line U&D
                </div>
            </div>
        </>

    )
}

export default HoverAnimation