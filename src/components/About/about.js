import React from 'react';
import './_about.scss';

const aboutContent = 'Jestem zaangażowany w rozwój osobisty, zawsze jestem otwarty na nowe wyzwania. Łatwo się przystosowuję do pracy w nowym zespole. Lubię pracować w grupie.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'

const About = () => {
  return(
    <>
      <section className='section_wrapper'>
        <div className='container about'>
          <div className='about_content-wrapper'>
            <h3 className='about_header'>O mnie</h3>
            <p className='about_content'>
              { aboutContent }
            </p>
          </div>
          <div>
          <div className="about_clip">
            <div className="clip clip_1">
              {/* <div className="content">
                <h3>Picture 1</h3>
                <p>Lorem ipsum dolor sit</p>
              </div> */}
            </div>
            <div className="clip clip_2">
              {/* <div className="content">
                <h3>Picture 2</h3>
                <p>Lorem ipsum dolor sit</p>
              </div> */}
            </div>
            <div className="clip clip_3">
              {/* <div className="content">
                <h3>Picture 3</h3>
                <p>Lorem ipsum dolor sit</p>
              </div> */}
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default About;