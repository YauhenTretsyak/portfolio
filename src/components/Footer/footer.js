import { Socials } from '../Blocks/index';
import {
  FooterSection,
  FooterWrapper,
} from './Footer.styles.js';

const Footer = () => {
  return(
    <FooterSection>
        <FooterWrapper>
          <p>Never give up!</p>
          <Socials />
        </FooterWrapper>
      </FooterSection>
  )
}

export default Footer;