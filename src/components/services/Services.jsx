import React from 'react';
import './services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image2,
    title: 'Developer',
    description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget. ',
  },
  {
    id: 2,
    image: Image1,
    title: 'Cloud Enthusiast',
    description:
      'Traversing the skies of cloud computing, my newfound passion is exploring the horizon of cloud solutions. My pursuit includes acquiring proficiency in constructing scalable, resilient infrastructures.',
  },
  {
    id: 3,
    image: Image3,
    title: 'Disc Golfer',
    description: 'Beyond the screen, you will most likely find me on the disc golf course. ',
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      {/* <h2 className="section__title">Downtime?</h2> */}

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
