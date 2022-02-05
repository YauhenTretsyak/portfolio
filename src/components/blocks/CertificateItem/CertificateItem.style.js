import styled from 'styled-components';
import { FlexWrapper, ImgWrapper } from '../../../style/StyledComponents';

const CertificateItemWrapper = styled(FlexWrapper)`
  flex-direction: column;
  padding: 10px;
  width: 100%;
  max-width: 400px;
`
const CertificateItemTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: ${({theme}) => theme.fontWeight.font_weightMedium};
  color: ${({theme}) => theme.colors.color_blue};
  text-shadow: 3px 4px 3px #00000059;
`
const CertificateImage = styled(ImgWrapper)`
  border: 1px solid #d1d1d1;
  box-shadow: 3px 4px 3px #00000059;
  background-color: #00000059;
`

export {
  CertificateItemWrapper,
  CertificateItemTitle,
  CertificateImage,
}