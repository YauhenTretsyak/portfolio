import { useContext } from 'react';
import { LangContext } from '../../Context/LangContext';
import { aboutData } from '../../Data/aboutData';
import { v4 as uuidv4 } from 'uuid';

import {
  AboutSection,
  AboutWrapper,
  AboutHeader,
  AboutContentWrapper,
  AboutContent,
  Clip,
  ClipItem
} from './About.styles.js';

const clipItems = aboutData.clip_secondary.map(item => {
  return(
    <ClipItem
      key={ uuidv4() }
      background={item.bg}
      clipPath={item.clip_path}
      className='clip'
    />
  )
})



const About = () => {
  const { langSwitch } = useContext(LangContext);
  const sectionTitle = langSwitch === 'PL' ? aboutData.sectionTitle.PL : aboutData.sectionTitle.EN;

  const contentLang = langSwitch === 'PL' ? aboutData.content.PL : aboutData.content.EN;

  const content = contentLang.map(item => {
    return(
      <AboutContent key={ uuidv4() }>
        { item.text }
      </AboutContent>
    )
  })

  return(
    <AboutSection>
      <AboutWrapper>
        <AboutContentWrapper>
          <AboutHeader>
            { sectionTitle }
          </AboutHeader>
          { content }
        </AboutContentWrapper>
        <div>
        <Clip background={aboutData.clip.bg}>
          { clipItems }
        </Clip>
        </div>
      </AboutWrapper>
    </AboutSection>
  )
}

export default About;