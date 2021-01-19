import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({theme}) => theme.fontSize.font_size14};
  font-weight: ${({theme}) => theme.fontWeight.font_weightLight};
  line-height: ${({theme}) => theme.lineHeight.line_height36};

  @media only screen and (min-width: 768px){
    font-size: ${({theme}) => theme.fontSize.font_size18};
  }

  & > span {
    font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
  }

  ${({white}) => white 
    && 
    css`
      color: ${({theme}) => theme.colors.white};
    `}

  ${({margin_bottom}) => 
    margin_bottom
    && css `
      margin-bottom: 40px;

      @media only screen and (min-width: 768px) {
        margin-bottom: 60px;
      }
    `
  }
`

export {Paragraph};