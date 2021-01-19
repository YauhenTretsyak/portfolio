import styled from 'styled-components';

const H3Styled = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.font_size20};
  font-weight: ${({theme}) => theme.fontWeight.font_weightRegular};
  line-height: ${({theme}) => theme.lineHeight.line_height30};
  color: ${({theme}) => theme.colors.black};

  @media only screen and (min-width: 768px){
    font-size: ${({theme}) => theme.fontSize.font_size30};
    line-height: ${({theme}) => theme.lineHeight.line_height60};
  }
`
export { H3Styled };