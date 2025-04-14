import React from 'react'
import slides from '../db/slidesDb'
import Carousel from './Carousel'

const HeroSection = () => {
  return (
    <div>
        <Carousel slides={slides} />
    </div>
  )
}

export default HeroSection