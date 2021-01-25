import { Socials } from '../Blocks/index';
import {
  FooterSection,
  FooterWrapper,
  FooterHeader
} from './Footer.styles.js';

const Footer = () => {
  return(
    <FooterSection>
        <FooterWrapper>
          <FooterHeader>
            Never give up!
          </FooterHeader>
          <Socials />
        </FooterWrapper>
      </FooterSection>
  )
}

export default Footer;