import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.font_weightRegular};
    overflow: ${({ showPopupForm }) => showPopupForm ? 'hidden' : 'auto'};
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.color_black};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({theme}) => theme.colors.color_blue};
    }
  }
`

export default GlobalStyle;