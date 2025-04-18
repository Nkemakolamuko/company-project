import React from 'react'
import image from "../assets/divider.png"

const Divider = () => {
  return (
    <div className='w-full'>
        <img src={image} className='w-[95%] mx-auto opacity-80' alt="Divider" />
    </div>
  )
}

export default Divider