import { ThemeProvider } from 'styled-components';
import LangContextProvider, { LangContext } from '../../Context/LangContext.js';
import GlobalStyle from '../../style/GlobalStyle';
import { theme } from '../../style/theme';
import { Main, CertificatePage, Footer } from '../index';
import { HelmetBlock } from '../Blocks/index'
import favicon from '../../Assets/favicon.ico';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return(
    <Router>
      <ThemeProvider theme={ theme }>
        <LangContextProvider>
          <GlobalStyle />
          {/* <HelmetBlock
            title={ 'Yauhen Tretsyak' }
            name={ 'Yauhen Tretsyak' }
            content={ 'portfolio' }
            description='portfolio'
            faviconUrl={ favicon }
          /> */}
          <Switch>
            <Route path='/certificates'>
              <CertificatePage />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
          <Footer />
        </LangContextProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App;