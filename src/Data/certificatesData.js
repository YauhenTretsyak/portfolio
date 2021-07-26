import img_1 from  '../Assets/certificates/calc.png';
import img_2 from '../Assets/certificates/html_css.jpg';
import img_3 from '../Assets/certificates/js_kurs.jpg';
import img_4 from '../Assets/certificates/responsive.jpg';
import img_5 from '../Assets/certificates/web_start_3.0.png';

const certificatesData = {
  mainTitle: {
    PL : 'Setryfikaty',
    EN : 'Certificates',
  },
  sliderSettings: {
    id: 'certificates',
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.arrowNext',
      prevEl: '.arrowPrev',
    },
    pagination: { 
      clickable: true,
      el: '.dots',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1104 : {
        slidesPerView: 3,
      },
    }
  },
  slides: [
    {
      title: 'cert 1',
      img: img_1,
    },
    {
      title: 'cert 2',
      img: img_2,
    },
    {
      title: 'cert 3',
      img: img_3,
    },
    {
      title: 'cert 4',
      img: img_4,
    },
    {
      title: 'cert 5',
      img: img_5,
    },
  ]
}

export {certificatesData};