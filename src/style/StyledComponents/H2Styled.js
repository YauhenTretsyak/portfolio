import styled, { css } from 'styled-components';

const H2Styled = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.font_size30};
  font-weight: ${({theme}) => theme.fontWeight.font_weightRegular};
  color: ${({theme}) => theme.colors.black};

  @media only screen and (min-width: 768px){
    font-size: ${({theme}) => theme.fontSize.font_size40};
    line-height: ${({theme}) => theme.lineHeight.line_height42};
  }
  
  ${({white_bold}) => 
    white_bold && 
    css `
      font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
      color: ${({theme}) => theme.colors.white};
    `}

  ${({black_bold}) => 
    black_bold && 
    css `
      font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
      color: ${({theme}) => theme.colors.black};
    `}

  ${({white}) => 
    white && 
    css `
      color: ${({theme}) => theme.colors.white};
  `}
`

export { H2Styled };