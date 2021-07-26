import styled from 'styled-components';
import { FlexWrapper, ImgWrapper } from '../../../style/StyledComponents';

const CertificateItemWrapper = styled(FlexWrapper)`
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;
const CertificateItemTitle = styled.h3``;
const CertificateImage = styled(ImgWrapper)``

const CertificateItem = (props) => {
  const { title, img } = props;

  return(
    <CertificateItemWrapper>
      <CertificateItemTitle>
        { title }
      </CertificateItemTitle>
      <CertificateImage>
        <img src={ img } alt='test' />
      </CertificateImage>
    </CertificateItemWrapper>
  )
}

export default CertificateItem;