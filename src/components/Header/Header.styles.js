import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ContainerWrapper } from '../../style/StyledComponents/ContainerWrapper';
import { FlexWrapper, ContainerWrapper } from '../../style/StyledComponents';

const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderWrapper = styled(ContainerWrapper)`
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`

const LangSwitchWrapper = styled(FlexWrapper)`
  position: absolute;
  top: 50%;
  left: 25px;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  height: 47px;
  transform: translateY(-50%);

  &::before {
    content: '';
    position: absolute;
    top: ${props => props.langSwitch === 'PL' ? '5px' : '8px'};
    left: 2px;
    width: 2px;
    height: 100%;
    background-color: ${({theme}) => theme.colors.color_grayDark};
    filter: blur(2px);
    transition: all 0.2s ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    top: ${props => props.langSwitch === 'PL' ? '-2px' : '1px'};
    left: -3px;
    width: 2px;
    height: 100%;
    border-radius: 20px;
    background-image: ${ props => props.langSwitch === 'PL' ?
      'linear-gradient( #0028FF 40%,#506473 56%);' :
      'linear-gradient(#506473 47%, #0028FF 59%);'
    };
    transition: all 0.2s ease-in-out;
  }
`

const LangSwitch = styled.p`
  cursor: pointer;
  font-weight: ${props => props.langSw ?
    ({theme}) => theme.fontWeight.font_weightBold :
    ({theme}) => theme.fontWeight.font_weightSemiBold
  };
  font-size: ${props => props.langSw ? '16px' : '14px'};
  color: ${props => props.langSw ? 
    ({theme}) => theme.colors.color_blue : 
    ({theme}) => theme.colors.color_grayDark
  };
  text-shadow: ${props => props.langSw ? '5px 8px 2px #00000059' : 'none'};
  transition: all 0.1s ease-in-out;
`

const LogoWpapper = styled.div`
  width: 100%;
  max-width: 289px;
  font-weight: ${({theme}) => theme.fontWeight.font_weightSemiBold};
  text-align: center;

  @media only screen and (min-width: 468px) {
    max-width: 440px;
  }
`

const LogoMain = styled.p`
  font-size: 36px;
  text-shadow: 6px 6px 2px #d8d8d8;
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
  color: ${({theme}) => theme.colors.color_black};
  text-shadow: 6px 7px 11px #00000059;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${({theme}) => theme.colors.color_blue};
    text-shadow: 10px 13px 2px #00000059;
  }
`

export {
  HeaderSection,
  HeaderWrapper,
  LangSwitchWrapper,
  LangSwitch,
  LogoWpapper,
  LogoMain,
  LogoSecondary,
  Menu,
  MenuLink
}