import styled from 'styled-components';
import { skillsData } from '../../Data/skillsData';
import { ContainerWrapper, ImgWrapper } from '../../style/StyledComponents/index';

const SkillsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SkillsWrapper = styled(ContainerWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 15px;
  border-radius: 8px;

  @media only screen and (min-width: 1104px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`

const SkillsAuthor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  color: ${({theme}) => theme.colors.color_grayDark};

  @media only screen and (min-width: 1104px) {
    margin-bottom: 0;
    max-width: 435px;
    height: 448px;
  }
`

const SkillsHeader = styled.h3`
  margin-top: 0;
  text-align: start;

  @media only screen and (min-width: 576px) {
    width: 90%;
  }

  @media only screen and (min-width: 1104px) {
    margin-left: 40px;
  }
`

const AuthorImgWrapper = styled(ImgWrapper)`
  margin-bottom: 40px;
  width: 215px;
  height: 265px;

  @media only screen and (min-width: 1104px) {
    width: auto;
    height: 311px;
  }
`

const SkillBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  padding: 20px 15px;
  border-radius: 8px;
  background: linear-gradient(${({theme}) => theme.colors.color_white} 24%, #d1e8ea6b 100%);
  box-shadow: inset 0px 4px 20px 2px #00000059;

  @media only screen and (min-width: 500px) {
    max-width: 500px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 736px;
    padding: 36px 56px;
  }

  &::before {
    content: '${ props =>  props.skillsLang}';
    position: absolute;
    top: 11px;
    left: 14px;
    color: ${({theme}) => theme.colors.color_grayDark};
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    text-shadow: 3px 3px 3px #9e9e9e;

    @media only screen and (min-width: 576px) {
      top: 19px;
      left: 20px;
    } 

    @media only screen and (min-width: 768px) {
      top: 22px;
      left: 29px;
    }
  }
`

const SkillIconColumn = styled.div``

const SkillBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media only screen and (min-width: 576px) {
    margin-top: 30px;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 22px;
  }
`
const SkillsContent = styled.p`
  font-size: 16px;

  @media only screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export {
  SkillsSection,
  SkillsWrapper,
  SkillsAuthor,
  SkillsHeader,
  AuthorImgWrapper,
  SkillBoxWrapper,
  SkillIconColumn,
  SkillBox,
  SkillsContent,
}