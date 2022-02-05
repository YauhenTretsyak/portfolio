import {
  CertificateItemWrapper,
  CertificateItemTitle,
  CertificateImage,
} from './CertificateItem.style'


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