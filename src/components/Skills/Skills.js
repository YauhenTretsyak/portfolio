import SkillsColumnIcon from './SkillsColumnIcon/SkillsColumnIcon.js';
import { Socials } from '../Blocks/index';
import { skillsData } from '../../Data/skillsData';
import authorImg from '../../Assets/author-img.png';

import styled from 'styled-components';
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
  /* margin-left: 20px; */
  /* margin-bottom: 15px; */
  text-align: start;

  @media only screen and (min-width: 576px) {
    width: 90%;
  }

  @media only screen and (min-width: 1104px) {
    /* margin-top: 41px; */
    /* margin-bottom: 11px; */
    margin-left: 40px;
  }

  /* @media only screen and (min-width: 1304px) {
    margin-top: 20px;
  } */
`

const AuthorImgWrapper = styled(ImgWrapper)`
  margin-bottom: 40px;
  width: 215px;
  height: 265px;
`

const SkillBoxWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  // height: 448px;
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
`

const SkillIconColumn = styled.div``

const SkillBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SkillsContent = styled.p`
  font-size: 16px;

  & > span {
    font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
    color: ${({theme}) => theme.colors.color_black};
  }

  @media only screen and (min-width: 576px) {
    font-size: 18px;
  }
`

const columnRender = skillsData.columns.map( (arr, index) => {
  console.log(arr.skillsColumn)
  const testItem = arr.skillsColumn;
  return (
    <SkillIconColumn key={ index + 'iuy56gbvBbv' }>
      {
        testItem.map(item => {
          return(
            <SkillsColumnIcon 
              key={ item.id }
              icon={ item.icon }
              title={ item.title }
              levelValue={ item.levelValue }
            />
          )
        })
      }
    </SkillIconColumn>
  )
})

const Skills = () => {
  return(
    <SkillsSection>
      <SkillsWrapper>
        <SkillsAuthor>
          <SkillsHeader>
            Frontend Developer
          </SkillsHeader>
          <AuthorImgWrapper className='author_img'>
            <img className='author' src={ authorImg } alt='author'></img>
          </AuthorImgWrapper>
          <Socials />
        </SkillsAuthor>
        <SkillBoxWrapper className='skills_box-wrapper'>
          <SkillBox className='skill_box'>

            { columnRender }
          
          </SkillBox>
          <SkillsContent>
            Oraz używam takie narzędzia, jak <span>Webpack</span>, <span>Gulp</span>. Posiadam dobre doświdczenie w tematyce <span>Responsive Web Design</span> (<span>Mobile first</span> i <span>Desktop first</span>), <span>CrossBrowser</span>. Miałem doświadczenie pracy z <span>jQuery</span>, <span>HubSpot</span>.
          </SkillsContent>
        </SkillBoxWrapper>
      </SkillsWrapper>
    </SkillsSection>
  )
}

export default Skills;