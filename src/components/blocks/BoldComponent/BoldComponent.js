import React from 'react'
import styled, {css} from 'styled-components'
const StyledBold = styled.span`
  display: inline-block;
  & > strong {
    font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
    color: ${({theme}) => theme.colors.color_black};
  }

`
const BoldComponent = ({ children }) => {
    return (
        <StyledBold>
            {children}
        </StyledBold>
    )
}

export default BoldComponent;