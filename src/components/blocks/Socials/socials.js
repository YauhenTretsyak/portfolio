import { socialsData } from '../../../Data/socialsData';
import { SocialsWrapper, SocialLink } from './Socials.styles.js';

const socialLinkItem = socialsData.socialIcon.map(item => {
  console.log(item.icon_before)
  return(
    <SocialLink 
      key={ item.id }
      href={ item.link }
      icon_before={ item.icon_before }  
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