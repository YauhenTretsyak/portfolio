import SkillsColumnIcon from './SkillsColumnIcon/SkillsColumnIcon.js';
import { Socials } from '../Blocks/index';
import { skillsData } from '../../Data/skillsData';
import authorImg from '../../Assets/author-img.png';

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


const columnRender = skillsData.columns.map( (arr, index) => {
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
            Oraz używam takie narzędzia, jak <span>Webpack</span>, <span>Gulp</span>. Posiadam dobre doświdczenie w tematyce <span>Responsive Web Design</span> (<span>Mobile first</span> i <span>Desktop first</span>), <span>CrossBrowser</span>. Mam doświadczenie pracy z <span>jQuery</span>, <span>HubSpot</span>.
          </SkillsContent>
        </SkillBoxWrapper>
      </SkillsWrapper>
    </SkillsSection>
  )
}

export default Skills;