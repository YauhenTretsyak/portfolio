import { useContext } from 'react';
import { LangContext } from '../../Context/LangContext.js';
import { headerData } from '../../Data/headerData.js';
import {About, Skills, Certificates, Header} from '../index'; 

const Main = () => {

  const { langSwitch } = useContext(LangContext);

  const linkInfo = langSwitch === 'PL' ? headerData.mainPage.PL : headerData.mainPage.EN;

  return(
    <>
      <Header 
        linkTitle={ linkInfo.mainLinkTitle } 
        linkTo={ linkInfo.mainLink }
        contactTitle={ linkInfo.contactTitle }
      />
      <Skills />
      <About />
      <Certificates />
    </>
  )
}

export default Main;