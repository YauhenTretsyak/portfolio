import PortfolioItem from './PortfolioItem/PortfolioItem';
import { Carousel } from 'react-responsive-carousel';
import { v4 as uuidv4 } from 'uuid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { portfolioData } from '../../Data/portfolioData';

import styled from 'styled-components';
import { ContainerWrapper } from '../../style/StyledComponents/index';
import arrowNext from '../../Assets/Icons/32_chevron_right.svg';
import arrowPrev from '../../Assets/Icons/32_chevron_left.svg';

const PortfolioSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PortfolioWrapper = styled(ContainerWrapper)`
  margin: auto;
  padding: 30px 40px;
  border-radius: 8px;
  color: ${({theme}) => theme.colors.color_grayDark};

  @media only screen and (min-width: 420px) {
    margin: auto 10px;
  }

  @media only screen and (min-width: 1104px) {
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;
  } 
`

const Header = styled.h3`
  margin-bottom: 10px;
`

const CarouselWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    list-style: none;
    z-index: 1;
    /* cursor: grab; */

    button {
      display: none;
      @media (min-width: 1104px) {
        display: block;
      }
    }

    .carousel {
      &-slider {
        padding-bottom: 36px;
      }
      .slider {
        width: 100%;

        @media only screen and (min-width: 1104px) {
          width: 34%;
        }
        &-wrapper{
          width: 100%;

          @media only screen and (min-width: 1104px) {
            width: 80%;
          }
        }
      }

      .slide {
        width: 293px;
        background-color: transparent;

        @media only screen and (min-width: 576px) {
          min-width: 50%;
        }

        @media only screen and (min-width: 768px) {
          min-width: 33.3%;
        }

        @media only screen and (min-width: 1104px) {
          min-width: 100.8%;
        }
      }
    }

    /* .carousel .slide {
      width: 293px;
      background-color: transparent;
    } */

    .carousel.carousel-slider .control-arrow:hover {
      background-color: transparent;
    }
`

const arrowNextStyle = {
  position: 'absolute',
  zIndex: 99,
  top: '45%',
  right: '45px',
  width: 28,
  height: 28,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  backgroundImage: `url(${arrowNext})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const arrowPrevStyle = {
  position: 'absolute',
  zIndex: 99,
  top: '45%',
  left: '45px',
  width: 28,
  height: 28,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  backgroundImage: `url(${arrowPrev})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const indicatorStyles = {
  background: '#fff',
  width: 9,
  height: 9,
  borderRadius: '50%',
  border: '1px solid #506473',
  display: 'inline-block',
  margin: '0 4px',
  cursor: 'pointer',
};

const Portfolio = ({ ...props }) => {

  const titleSection = props.langSwitch === 'PL' ? portfolioData.mainTitle.PL : portfolioData.mainTitle.EN;

  const portfolioSlides = portfolioData.slides.map(item => {
    return(
      <PortfolioItem
        key={ uuidv4() }
        bgImage={ item.bgImage }
        content={ item.content }
        link={ item.link }
      />
    )
  })

  return(
    <PortfolioSection>
      <PortfolioWrapper>
        <Header>
          { titleSection }
        </Header>
        <CarouselWrapper>
          <Carousel
            infiniteLoop
            showStatus={false}
            swipeable
            emulateTouch
            showThumbs={false}
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type='button'
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowNextStyle }}
                ></button>
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type='button'
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowPrevStyle }}
                ></button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    style={ { ...indicatorStyles, background: '#0028ff9e'} }
                  />
                );
              }
              return (
                <li
                  style={{ ...indicatorStyles }}
                  value={index}
                  key={index}
                  onClick={onClickHandler}
                  role='button'
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            { portfolioSlides }
          </Carousel>
        </CarouselWrapper>
      </PortfolioWrapper>
    </PortfolioSection>
  )
}

export default Portfolio;