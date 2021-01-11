import React from 'react';
import About from '../About';
import Header from '../Header';
import Skills from '../Skills';
import Footer from '../Footer';

const Main = () => {
  return(
    <>
      <Skills />
      <About />
    </>
  )
};

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
};

export default App;
