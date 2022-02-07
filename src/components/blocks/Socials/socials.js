import { socialsData } from '../../../Data/socialsData';
import { v4 as uuidv4 } from 'uuid';
import { SocialsWrapper, SocialLink } from './Socials.styles.js';

const socialLinkItem = socialsData.socialIcon.map(item => {
  return(
    <SocialLink 
      key={ uuidv4() }
      href={ item.link }
      icon_before={ item.icon_before }  
      target='_blank'
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