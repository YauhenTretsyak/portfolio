import styled from 'styled-components';
import { ContainerWrapper } from '../../style/StyledComponents/index';

const PortfolioSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
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

export { PortfolioSection, PortfolioWrapper, Header }