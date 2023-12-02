import React from 'react';
import './home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import Dots from '../../assets/dots-bg.svg';
// import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        {/* <img src={Dots} alt="" className="dots__img" /> */}
        <h1 className="home__name">Michael Maton</h1>
        <span className="home__education">Software Developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>
      </div>

      {/* <Shapes /> */}
    </section>
  );
};

export default Home;
