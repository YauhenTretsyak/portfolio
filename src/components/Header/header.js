import {
  HeaderSection,
  HeaderWrapper,
  LogoWpapper,
  LogoMain,
  LogoSecondary,
  Menu,
  MenuLink
} from './Header.styles.js';

const Header = () => {
  return (
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
          <MenuLink href='1'>Portfolio</MenuLink>
          <MenuLink href='2'>Kontakt</MenuLink>
        </Menu>
        {/* <div className="hamburger-box menu_hamburger">
          <div className="hamburger-inner"></div>
        </div> */}
      </HeaderWrapper>
    </HeaderSection>
  )
}

export default Header;