import { ThemeProvider } from 'styled-components';
import LangContextProvider, { LangContext } from '../../Context/LangContext.js';
import GlobalStyle from '../../style/GlobalStyle';
import { theme } from '../../style/theme';
import { Main, PortfolioPage, Footer } from '../index';
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
          <Switch>
            <Route path='/portfolio'>
              <PortfolioPage />
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