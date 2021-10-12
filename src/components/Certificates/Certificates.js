import { useContext } from 'react';
import { CertificateItem } from '../Blocks/index';
import { Slider } from '../Blocks/index';
import { v4 as uuidv4 } from 'uuid';
import { certificatesData } from '../../Data/certificatesData';
import { LangContext } from '../../Context/LangContext.js';
import {  SwiperSlide } from 'swiper/react';


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

const slides = certificatesData.slides.map(item => {
  return(
    <SwiperSlide key={ uuidv4() }>
      <CertificateItem 
        title={ item.title }
        img={ item.img }
      />
    </SwiperSlide>
  )
})

const Certificates = props => {

  const { langSwitch } = useContext(LangContext);

  const titleSection = langSwitch === 'PL' ? certificatesData.mainTitle.PL : certificatesData.mainTitle.EN;

  return(
    <CertificatesSection>
      <CertificatesWrapper>
        <Title>
          { titleSection }
        </Title>
        <Slider 
          sliderSettings={ certificatesData.sliderSettings }
          slides={ slides }
        />
      </CertificatesWrapper>
    </CertificatesSection>
  )
}

export default Certificates;