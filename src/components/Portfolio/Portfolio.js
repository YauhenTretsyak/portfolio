import { useContext } from 'react';
import { LangContext } from '../../Context/LangContext.js';
import { Slider } from '../Blocks/index';
import { portfolioData } from '../../Data/portfolioData';
import { PortfolioSection, PortfolioWrapper, Title } from './Portfolio.styles.js';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import { v4 as uuidv4 } from 'uuid';
import {  SwiperSlide } from 'swiper/react';

const Portfolio = () => {
  
  const { langSwitch } = useContext(LangContext)

  const titleSection = langSwitch === 'PL' ? portfolioData.mainTitle.PL : portfolioData.mainTitle.EN;
  const slideItems = portfolioData.slides.map(item => {
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
    <PortfolioSection>
      <PortfolioWrapper>
        <Title>
          { titleSection }
        </Title>
        <Slider 
          sliderSettings={ portfolioData.sliderSettings }
          slides={ slideItems }
        />
      </PortfolioWrapper>
    </PortfolioSection>
  )
}

export default Portfolio;