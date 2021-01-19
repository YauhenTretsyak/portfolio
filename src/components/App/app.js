import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/GlobalStyle';
import { theme } from '../../style/theme';
import { Header, Main, Footer } from '../index';

const App = () => {
  return(
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App;