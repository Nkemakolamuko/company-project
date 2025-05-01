import React from 'react'
import image from "../assets/divider.png"

const Divider = () => {
  return (
    <div className='w-full'>
        {/* <img src={image} className='w-[95%] mx-auto h-16 md:h-full opacity-80' alt="Divider" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#043A53" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,272C480,277,600,267,720,250.7C840,235,960,213,1080,197.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </div>
  )
}

export default Divider