import styled, { css } from 'styled-components';

const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.font_size20};
  font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
  line-height: ${({theme}) => theme.lineHeight.line_height30};
  color: ${({theme}) => theme.colors.black};

  @media only screen and (min-width: 768px){
    line-height: ${({theme}) => theme.lineHeight.line_height60};
    font-size: ${({theme}) => theme.fontSize.font_size40};
  }

  ${({ white }) =>
  white &&
  css`
    color: ${({ theme }) => theme.colors.white};
  `}
`

export { MainTitle};