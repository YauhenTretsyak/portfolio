import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { v4 as uuidv4 } from 'uuid';
import { portfolioData } from '../../../Data/portfolioData';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import {
  CarouselWrapper,
  ArrowsBlock,
  ArrowNext,
  ArrowPrev,
  DotsWrapper,
  Dot
} from './Slider.styles.js';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';



const arrowNextIcon = <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m19 8.92893219 7.0710678 7.07106781-7.0710678 7.0710678-1.4142136-1.4142136 4.6562136-4.656922-16.242.0000678v-2l16.242-.0000678-4.6562136-4.6567864z" fill="currentColor"/></svg>;
const arrowPrevIcon = <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m19 9 7.0710678 7.0710678-7.0710678 7.0710678-1.4142136-1.4142135 4.6562136-4.6569221-16.242.0000678v-2l16.242-.0000678-4.6562136-4.6567864z" fill="currentColor" transform="matrix(-1 0 0 1 32.071068 0)"/></svg>;

const Slider = () => {

  SwiperCore.use([Navigation, Pagination, A11y]);

  const portfolioSlides = portfolioData.slides.map(item => {
    return(
      <SwiperSlide key={ uuidv4() }>
        <PortfolioItem
          bgImage={ item.bgImage }
          content={ item.content }
          link={ item.link }
        />
      </SwiperSlide>
    )
  })

  return(
    <CarouselWrapper>
      <Swiper id='main'
        slidesPerView={ 1 }
        loop={ true }
        navigation={
          {
            nextEl: '.arrowNext',
            prevEl: '.arrowPrev',
          }
        }
        pagination={{ 
          clickable: true,
          el: '.dots',
        }}
        breakpoints={
          {
            576: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
            1104 : {
              slidesPerView: 3,
            },
          }
        }
      >
        { portfolioSlides }
      </Swiper>
      <DotsWrapper>
        <Dot className='dots' />
      </DotsWrapper>
      <ArrowsBlock>
        <ArrowPrev className='arrowPrev'>
          { arrowPrevIcon }
        </ArrowPrev>
        <ArrowNext className='arrowNext'>
          { arrowNextIcon }
        </ArrowNext>
      </ArrowsBlock>
    </CarouselWrapper>
  )
}

export default Slider;