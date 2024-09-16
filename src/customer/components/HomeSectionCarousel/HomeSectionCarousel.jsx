import React from 'react'
import { useStatec } from 'react';
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'; const HomeSectionCarousel = () => {
    const [activeIndex,setActiveIndex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const synchActiveIndex=({item})=>setActiveIndex(item);
    const items = [1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1].map((item) => <HomeSectionCard />);
    return (
        <div className='relative  px-4 lg:px-8'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}

                    autoPlayInterval={1000}
                    infinite
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChange={synchActiveIndex}
                    activeIndex={activeIndex} // Optional: disables next/prev buttons
                />
               {activeIndex!=items.length-5 && <button
                    variant="contained"
                    className='z-50 bg-white p-4 hover:bg-gray-200 transition-all duration-300' onClick={slideNext}
                    style={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%) rotate(180deg)' }}
                    aria-label='previous'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(180deg)', color: 'black', fontSize: '2rem' }} />
                </button>}

                <button
                    variant="contained"
                    className='z-50 bg-white p-4 hover:bg-gray-200 transition-all duration-300' onClick={slidePrev}
                    style={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(-180deg)' }}
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon sx={{ color: 'black', fontSize: '2rem' }} />
                </button>

            </div>
        </div>
    )
}

export default HomeSectionCarousel
