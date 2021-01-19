import { aboutData } from '../../Data/aboutData';

import styled from 'styled-components';
import { ContainerWrapper } from '../../style/StyledComponents/ContainerWrapper';

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

const AboutWrapper = styled(ContainerWrapper)`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  padding: 30px 40px;
  border-radius: 8px;

  @media only screen and (min-width: 1104px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  } 
`

const AboutHeader = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;
`

const AboutContentWrapper = styled.div`
  @media only screen and (min-width: 1104px) {
    margin-right: 70px;
  }
`

const AboutContent = styled.p``

const Clip = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: 400px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  background: url(${props => props.background});
  background-size: cover;
  box-shadow: 0px 3px 10px 1px #00000059;

  &:hover .clip{
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    &:hover {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  @media only screen and (min-width: 1104px) {
    margin-bottom: 0;
  }
`

const ClipItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  background: url(${props => props.background});
  background-size: cover;
  clip-path: polygon(${props => props.clipPath});
`

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

const About = () => {
  return(
    <AboutSection>
      <AboutWrapper>
        <AboutContentWrapper>
          <AboutHeader className='about_header'>
            O mnie
          </AboutHeader>
          <AboutContent>
            { aboutData.mainInfo }
          </AboutContent>
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