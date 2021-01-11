import React from 'react';
import './_header.scss';

const Header = () => {
  return(
    <header className='section_wrapper'>
      <div className='container header'>
        <div className='logo'>
          <p className='logo_main'>Eugeniusz Trecjak</p>
          <p className='logo_secondary'>(Yauhen Tretsyak)</p>
        </div>
        <div className='menu'>
          <a href='1' className='menu_link'>Portfolio</a>
          <a href='2' className='menu_link'>Kontakt</a>
        </div>
        <div className="hamburger-box menu_hamburger">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    </header>
  )
};

export default Header;