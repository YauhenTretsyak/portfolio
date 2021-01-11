import React from 'react';
import './_footer.scss';
import Socials from '../blocks/Socials';

const Footer = () => {
  return(
    <>
      <footer className='footer_wrapper'>
        <div className='container footer'>
          <p>Never give up!</p>
          <Socials />
        </div>
      </footer>
    </>
  )
}

export default Footer;