import styled from 'styled-components';
import { ContainerWrapper } from '../../style/StyledComponents/ContainerWrapper';

const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 576px) {
    justify-content: space-between;
  }
`
const FooterWrapper = styled(ContainerWrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 45px;
  padding-bottom: 45px;
  padding-left: 36px;
  padding-right: 36px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: ${({theme}) => theme.fontWeight.font_weightSemiBold};
  font-style: italic;

  @media only screen and (min-width: 576px) {
    justify-content: space-between;
  }
`

export {
  FooterSection,
  FooterWrapper,
}