import { socialsData } from '../../../Data/socialsData';

import styled from 'styled-components';

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`

const SocialLink = styled.a`
  display: block;
  width: 30px;
  height: 30px;
  color: ${({theme}) => theme.colors.color_grayDark};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.colors.color_blue};
  }
`
const socialLinkItem = socialsData.socialIcon.map(item => {
  return(
    <SocialLink 
      key={ item.id }
      href={ item.link }  
    >
      { item.icon }
    </SocialLink>
  )
})


const Socials = () => {
  return(
    <SocialsWrapper>
      { socialLinkItem }
    </SocialsWrapper>
  )
}

export default Socials;