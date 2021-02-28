import { useContext } from 'react';
import { LangContext } from '../../Context/LangContext.js';
import {Header, Portfolio} from '../index'; 
import { headerData } from '../../Data/headerData.js';

const PortfolioPage = () => {

  const { langSwitch } = useContext(LangContext);

  const linksInfo = langSwitch === 'PL' ? headerData.portfolioPage.PL : headerData.portfolioPage.EN;

  return(
    <>
      <Header 
        linkTitle={ linksInfo.mainLinkTitle }
        linkTo={ linksInfo.mainLink }
        contactTitle={ linksInfo.contactTitle }
      />
      <Portfolio langSwitch={ langSwitch } />
    </>
  )
}

export default PortfolioPage;