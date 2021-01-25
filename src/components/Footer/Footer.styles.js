import styled from 'styled-components';
import { ContainerWrapper } from '../../style/StyledComponents/ContainerWrapper';

const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const FooterWrapper = styled(ContainerWrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 25px 27px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: ${({theme}) => theme.fontWeight.font_weightSemiBold};
  font-style: italic;
  color: ${({theme}) => theme.colors.color_grayDark};

  @media only screen and (min-width: 576px) {
    justify-content: space-between;
    padding: 45px 36px;
  }
`

const FooterHeader = styled.p`
  margin-bottom: 6px;

  @media only screen and (min-width: 388px) {
    margin-bottom: 0;
  }
`

export {
  FooterSection,
  FooterWrapper,
  FooterHeader
}