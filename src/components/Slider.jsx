import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css'

const items = [
   '/images/slider2.webp',
   '/images/slider3.webp',
   '/images/slider4.webp',
].map((x)=><img src={x} alt=''  className='pic  '  width={1200}     />);

const Slider = () => {
  return (
    <AliceCarousel
    autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1500}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
/>
  )
}

export default Slider
