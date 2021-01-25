import {HashRouter as Router} from 'react-router-dom';
import {
  HeaderSection,
  HeaderWrapper,
  LogoWpapper,
  LogoMain,
  LogoSecondary,
  Menu,
  MenuLink
} from './Header.styles.js';

const Header = ({ linkTitle, linkTo }) => {
  return (
    <Router>
      <HeaderSection>
        <HeaderWrapper>
          <LogoWpapper>
            <LogoMain>
              Eugeniusz Trecjak
            </LogoMain>
            <LogoSecondary>
              (Yauhen Tretsyak)
            </LogoSecondary>
          </LogoWpapper>
          <Menu>
            <MenuLink  to={ linkTo }>{ linkTitle }</MenuLink>
            <MenuLink as='p'>Kontakt</MenuLink>
          </Menu>
          {/* <div className="hamburger-box menu_hamburger">
            <div className="hamburger-inner"></div>
          </div> */}
        </HeaderWrapper>
      </HeaderSection>
    </Router>
  )
}

export default Header;