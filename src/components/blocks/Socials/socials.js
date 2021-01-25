import { socialsData } from '../../../Data/socialsData';
import { SocialsWrapper, SocialLink } from './Socials.styles.js';

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