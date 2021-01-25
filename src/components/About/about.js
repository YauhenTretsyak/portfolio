import { aboutData } from '../../Data/aboutData';

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
      key={item.id}
      background={item.bg}
      clipPath={item.clip_path}
      className='clip'
    />
  )
})

const content = aboutData.content.map(item => {
  return(
    <AboutContent key={ item.id }>
      { item.text }
    </AboutContent>
  )
})

const About = () => {
  return(
    <AboutSection>
      <AboutWrapper>
        <AboutContentWrapper>
          <AboutHeader>
            O mnie
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