import {HashRouter as Router} from 'react-router-dom';
import { useState, useContext } from 'react';
import { LangContext } from '../../Context/LangContext.js';
import { headerData } from '../../Data/headerData.js';
import {
  HeaderSection,
  HeaderWrapper,
  LangSwitchWrapper,
  LangSwitch,
  LogoWpapper,
  LogoMain,
  LogoSecondary,
  Menu,
  MenuLink
} from './Header.styles.js';

const Header = ({ ...props }) => {

  const {langSwitch, languageSwitcher} = useContext(LangContext)

  const [lang, setLang] = useState(langSwitch);

  const SwicthLanguage = (e) => {
    if(e.target.innerHTML === 'PL') {
      setLang('PL')
      languageSwitcher('PL')
    } else if(e.target.innerHTML === 'EN') {
      setLang('EN')
      languageSwitcher('EN')
    }
  }

  const mainName = langSwitch === 'PL' ? headerData.authorName.mainName : headerData.authorName.subName;
  const subName = langSwitch === 'EN' ? headerData.authorName.mainName : headerData.authorName.subName; 

  return (
    <Router>
      <HeaderSection>
        <HeaderWrapper>
          <LangSwitchWrapper langSwitch={ langSwitch }>
            <LangSwitch 
              onClick={SwicthLanguage}
              langSw={ lang === 'PL' ? true : null}
            >
              PL
            </LangSwitch>
            <LangSwitch 
              onClick={SwicthLanguage}
              langSw={ lang === 'EN' ? true : null} 
            >
              EN
            </LangSwitch>
          </LangSwitchWrapper>
          <LogoWpapper>
            <LogoMain>
              { mainName }
            </LogoMain>
            <LogoSecondary>
              ({ subName })
            </LogoSecondary>
          </LogoWpapper>
          <Menu>
            <MenuLink  to={ props.linkTo }>{ props.linkTitle }</MenuLink>
            <MenuLink as='p'>{ props.contactTitle }</MenuLink>
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