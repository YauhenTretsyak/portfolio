import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/GlobalStyle';
import { theme } from '../../style/theme';
import { Main, Portfolio, Footer } from '../index';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return(
    <Router>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Switch>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App;