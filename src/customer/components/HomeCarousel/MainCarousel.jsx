import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const items = mainCarouselData.map((item) => (
        <img 
            className='cursor-pointer relative w-full h-72 overflow-hidden' 
            role='presentation' 
            src={item.imageUrl} 
            alt="" 
            style={{ 
                width: '300%', 
                height: '700px', 
                objectFit: 'contain', 
                justifyContent:'center',
                 
            }} 
        />
    ));

    return (
        <div>
            <AliceCarousel
                items={items}
                autoPlay 
                autoPlayInterval={1200} 
                infinite 
                disableButtonsControls // Optional: disables next/prev buttons
            />
        </div>
    );
}

export default MainCarousel;
