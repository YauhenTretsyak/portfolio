import Slider from './Slider/Slider';
import { portfolioData } from '../../Data/portfolioData';
import { PortfolioSection, PortfolioWrapper, Header } from './Portfolio.styles.js';

const Portfolio = ({ ...props }) => {
  
  const titleSection = props.langSwitch === 'PL' ? portfolioData.mainTitle.PL : portfolioData.mainTitle.EN;

  return(
    <PortfolioSection>
      <PortfolioWrapper>
        <Header>
          { titleSection }
        </Header>
        <Slider />
      </PortfolioWrapper>
    </PortfolioSection>
  )
}

export default Portfolio;