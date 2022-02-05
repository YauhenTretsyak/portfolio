import { useContext } from 'react';
import { CertificateItem } from '../Blocks/index';
import { Slider } from '../Blocks/index';
import { v4 as uuidv4 } from 'uuid';
import { certificatesData } from '../../Data/certificatesData';
import { LangContext } from '../../Context/LangContext.js';
import {  SwiperSlide } from 'swiper/react';

import { CertificatesSection, CertificatesWrapper, Title } from './Certificates.styles'

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