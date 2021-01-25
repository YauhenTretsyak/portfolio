import styled from 'styled-components';

const SkillIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
const SkillIcon = styled.div`
  width: 23px;

  @media only screen and (min-width: 500px) {
    width: 25px;
    height: 25px;
  }

  @media only screen and (min-width: 1301px) {
    width: 40px;
    height: 40px;
  }
`

const SkillLevel = styled.div`
  margin-left: 6px;
`

const SkillLevelHeader = styled.p`
  margin-bottom: ${props => props.levelValue ? '5px' :  '0'};
  font-size: 8px;
  font-weight: ${({theme}) => theme.fontWeight.font_weightBold};

  @media only screen and (min-width: 500px) {
    font-size: 14px;
  }

  @media only screen and (min-width: 768px) {
    margin-left: 6px;
  }

  @media only screen and (min-width: 1104px) {
    font-size: 11px;
  }

  @media only screen and (min-width: 1301px) {
    font-size: 14px;
  }
`

const SkillLevelWrapper = styled.div`
  display: ${props => !props.levelValue ? 'none' :  ''};
  width: 44px;
  height: 5px;
  border: ${props => !props.levelValue ? 'none' :  '1px solid'} ${({theme}) => theme.colorscolor_grayDark} ;
  border-radius: 3px;

  @media only screen and (min-width: 500px) {
    margin-left: 0;
    width: 70px;
    height: 7px;
  }

  @media only screen and (min-width: 768px) {
    margin-left: 6px;
  }

  @media only screen and (min-width: 1104px) {
    width: 80px;
    height: 9px;
  }

  @media only screen and (min-width: 1301px) {
    width: 93px;
  }
`

const SkillLevelValue = styled.div`
  height: 100%;
  width: ${props => props.levelValue}%;
  border-radius: 3px;
  background-color: ${props => props.levelValue ? ({theme}) => theme.colors.color_yellow : 'none'};
`

export {
  SkillIconWrapper,
  SkillIcon,
  SkillLevel,
  SkillLevelHeader,
  SkillLevelWrapper,
  SkillLevelValue
}