import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerWrapper } from '../../style/StyledComponents/ContainerWrapper';

const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderWrapper = styled(ContainerWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const LogoWpapper = styled.div`
  width: 100%;
  max-width: 440px;
  font-weight: ${({theme}) => theme.fontWeight.font_weightSemiBold};
  text-align: center;
`

const LogoMain = styled.p`
  font-size: 36px;
`
const LogoSecondary = styled.p`
  width: 100%;
  font-size: 24px;
  color: ${({theme}) => theme.colors.color_grayDark};
`

const Menu = styled.div`
  display: none;

  @media only screen and (min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 260px;
  }
`

const MenuLink = styled(Link)`
  font-size: 24px;
  font-weight: ${({theme}) => theme.fontWeight.font_weightMedium};
`

export {
  HeaderSection,
  HeaderWrapper,
  LogoWpapper,
  LogoMain,
  LogoSecondary,
  Menu,
  MenuLink
}