import styled from 'styled-components';
import { ContainerWrapper } from '../../style/StyledComponents/index';

const CertificatesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CertificatesWrapper = styled(ContainerWrapper)`
  border-radius: 8px;
`

const Title = styled.h3`
  color: ${({theme}) => theme.colors.color_grayDark};
`

export { CertificatesSection, CertificatesWrapper, Title };