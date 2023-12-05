import React from 'react';
import './about.css';
import Image from '../../assets/avatar-2.svg';
// import AboutBox from './AboutBox';
import Resume from '../../assets/resume.pdf';
// import Dots from '../../assets/dots-bg.svg';

const About = () => {
  return (
    <section className="about container section" id="about">
      {/* <div className="section__header"> */}
      {/* <img src={Dots} alt="" className="dots__img" /> */}

      <h2 className="section__title">About Me</h2>
      {/* </div> */}

      <div className="about__container grid">
        <div className="img__wrapper">
          <img src={Image} alt="" className="about__img" />
        </div>

        <div className="about__data">
          <div className="about__info">
            <p className="about__description">
              I'm Michael — an experienced software developer with a background
              in physics and mathematics. Skilled in backend development and
              designing efficient and user-friendly systems. Dedicated to
              creating high-quality code through continuous integration and
              testing. I'm Michael — an experienced software developer with a
              background in physics and mathematics. Skilled in backend
              development and designing efficient and user-friendly systems.
              Dedicated to creating high-quality code through continuous
              integration and testing. I'm Michael — an experienced software
              developer with a background in physics and mathematics. Skilled in
              backend development and designing efficient and user-friendly
              systems. Dedicated to creating high-quality code through
              continuous integration and testing.
            </p>
            <a href={Resume} className="btn" target="_blank" rel="noreferrer">
              Download CV{' '}
              <i
                className="fa-solid fa-arrow-up-right-from-square"
                style={{ marginLeft: '8px' }}
              ></i>
            </a>
          </div>

          {/* <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
