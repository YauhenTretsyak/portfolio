import { useContext } from 'react';
import SkillsColumnIcon from './SkillsColumnIcon/SkillsColumnIcon.js';
import { Socials } from '../Blocks/index';
import { skillsData } from '../../Data/skillsData';
import { LangContext } from '../../Context/LangContext';
import { v4 as uuidv4 } from 'uuid';
import authorImg from '../../Assets/author-img.jpg';

import {
  SkillsSection,
  SkillsWrapper,
  SkillsAuthor,
  SkillsHeader,
  AuthorImgWrapper,
  SkillBoxWrapper,
  SkillIconColumn,
  SkillBox,
  SkillsContent,
} from './Skills.styles.js';


const columnRender = skillsData.columns.map( (arr) => {
  const testItem = arr.skillsColumn;
  return (
    <SkillIconColumn key={ uuidv4() }>
      {
        testItem.map(item => {
          return(
            <SkillsColumnIcon 
              key={ uuidv4() }
              icon={ item.icon }
              title={ item.title }
              levelValue={ item.levelValue }
              color={ item.color }
              colorHover={ item.colorHover }
            />
          )
        })
      }
    </SkillIconColumn>
  )
})

const Skills = () => {
  const { langSwitch } = useContext(LangContext);
  const skillsInfo = langSwitch === 'PL' ? skillsData.skillsInfo.PL : skillsData.skillsInfo.EN;
  const skillsLang = langSwitch === 'PL' ? 'Moje umiejętnośći' : 'My Skills';

  return(
    <SkillsSection>
      <SkillsWrapper>
        <SkillsAuthor>
          <SkillsHeader>
            Frontend Developer
          </SkillsHeader>
          <AuthorImgWrapper>
            <img  src={ authorImg } alt='author'></img>
          </AuthorImgWrapper>
          <Socials />
        </SkillsAuthor>
        <SkillBoxWrapper
          skillsLang={ skillsLang }
        >
          <SkillBox>

            { columnRender }
          
          </SkillBox>
          <SkillsContent>
            { skillsInfo }
          </SkillsContent>
        </SkillBoxWrapper>
      </SkillsWrapper>
    </SkillsSection>
  )
}

export default Skills;